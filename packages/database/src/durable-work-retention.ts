import { randomUUID } from 'node:crypto';
import type { Pool, PoolClient } from 'pg';
import type { DurableWorkType } from './dead-letter-operations.js';

export const durableWorkTerminalStatuses = ['completed', 'failed'] as const;
export type DurableWorkTerminalStatus = (typeof durableWorkTerminalStatuses)[number];

export const MINIMUM_DURABLE_WORK_ARCHIVE_AGE_MS = 24 * 60 * 60 * 1_000;
export const MAX_DURABLE_WORK_ARCHIVE_BATCH = 500;

export interface DurableWorkArchiveCandidate {
  workType: DurableWorkType;
  workId: string;
  organizationId: string;
  storeId: string | null;
  terminalStatus: DurableWorkTerminalStatus;
  attempts: number;
  errorCode: string | null;
  terminalAt: string;
  sourceCreatedAt: string;
}

export interface DurableWorkArchiveRecord extends DurableWorkArchiveCandidate {
  archivedAt: string;
  archiveRunId: string;
  archivedBy: string;
}

export interface DurableWorkArchivePreview {
  cutoff: string;
  statuses: DurableWorkTerminalStatus[];
  limit: number;
  candidates: DurableWorkArchiveCandidate[];
}

export interface DurableWorkArchiveResult {
  cutoff: string;
  statuses: DurableWorkTerminalStatus[];
  limit: number;
  archiveRunId: string;
  archived: DurableWorkArchiveRecord[];
}

export type DurableWorkRetentionErrorCode =
  | 'DURABLE_WORK_ARCHIVE_INPUT_INVALID'
  | 'DURABLE_WORK_ARCHIVE_MAINTENANCE_ROLE_REQUIRED'
  | 'DURABLE_WORK_ARCHIVE_EVIDENCE_CONFLICT'
  | 'DURABLE_WORK_ARCHIVE_STATE_CHANGED';

export class DurableWorkRetentionError extends Error {
  constructor(
    readonly code: DurableWorkRetentionErrorCode,
    message: string,
  ) {
    super(message);
    this.name = 'DurableWorkRetentionError';
  }
}

interface SourceRow {
  work_type: DurableWorkType;
  work_id: string;
  organization_id: string;
  store_id: string | null;
  terminal_status: DurableWorkTerminalStatus;
  attempts: number;
  error_code: string | null;
  terminal_at: Date | string;
  source_created_at: Date | string;
}

interface ArchiveRow extends SourceRow {
  archived_at: Date | string;
  archive_run_id: string;
  archived_by: string;
}

interface ArchiveInput {
  cutoff: Date;
  statuses: readonly DurableWorkTerminalStatus[];
  limit?: number;
  at?: Date;
}

export class PostgresDurableWorkRetention {
  constructor(private readonly pool: Pool) {}

  async preview(input: ArchiveInput): Promise<DurableWorkArchivePreview> {
    const normalized = normalizeInput(input);
    const client = await this.pool.connect();
    try {
      await assertMaintenancePrivileges(client);
      const rows = await selectCandidates(client, normalized);
      return {
        cutoff: normalized.cutoff.toISOString(),
        statuses: [...normalized.statuses],
        limit: normalized.limit,
        candidates: rows.map(mapCandidate),
      };
    } finally {
      client.release();
    }
  }

  async archive(
    input: ArchiveInput & { archiveRunId?: string },
  ): Promise<DurableWorkArchiveResult> {
    const normalized = normalizeInput(input);
    const archiveRunId = normalizeArchiveRunId(input.archiveRunId);
    const archivedAt = normalized.at;
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await assertMaintenancePrivileges(client);
      const previewRows = await selectCandidates(client, normalized);
      const archived: ArchiveRow[] = [];

      for (const workType of ['courier_job', 'webhook_delivery', 'verification_job'] as const) {
        const ids = previewRows
          .filter((row) => row.work_type === workType)
          .map((row) => row.work_id);
        if (ids.length === 0) continue;
        const locked = await lockCandidates(client, workType, ids, normalized);
        for (const row of locked) {
          const evidence = await ensureArchiveEvidence(client, row, archiveRunId, archivedAt);
          await deleteSourceRow(client, row);
          archived.push(evidence);
        }
      }

      await client.query('commit');
      archived.sort(
        (left, right) => toDate(left.terminal_at).getTime() - toDate(right.terminal_at).getTime(),
      );
      return {
        cutoff: normalized.cutoff.toISOString(),
        statuses: [...normalized.statuses],
        limit: normalized.limit,
        archiveRunId,
        archived: archived.map(mapArchive),
      };
    } catch (error) {
      await client.query('rollback').catch(() => undefined);
      throw error;
    } finally {
      client.release();
    }
  }
}

interface NormalizedArchiveInput {
  cutoff: Date;
  statuses: DurableWorkTerminalStatus[];
  limit: number;
  at: Date;
}

function normalizeInput(input: ArchiveInput): NormalizedArchiveInput {
  const at = input.at ?? new Date();
  if (!isValidDate(at) || !isValidDate(input.cutoff)) {
    throw invalidInput('Archive cutoff and current time must be valid dates');
  }
  if (input.cutoff.getTime() > at.getTime() - MINIMUM_DURABLE_WORK_ARCHIVE_AGE_MS) {
    throw invalidInput('Archive cutoff must be at least 24 hours before the maintenance run');
  }
  const statuses = [...new Set(input.statuses)];
  if (
    statuses.length === 0 ||
    statuses.some((status) => !durableWorkTerminalStatuses.includes(status))
  ) {
    throw invalidInput('Archive statuses must contain completed, failed, or both');
  }
  const limit = input.limit ?? 100;
  if (!Number.isSafeInteger(limit) || limit < 1 || limit > MAX_DURABLE_WORK_ARCHIVE_BATCH) {
    throw invalidInput(`Archive limit must be between 1 and ${MAX_DURABLE_WORK_ARCHIVE_BATCH}`);
  }
  return { cutoff: input.cutoff, statuses, limit, at };
}

function normalizeArchiveRunId(value?: string): string {
  const normalized = value ?? `dwar_${randomUUID()}`;
  if (!/^dwar_[A-Za-z0-9-]{8,100}$/.test(normalized)) {
    throw invalidInput('Archive run ID must use the dwar_ prefix and bounded opaque characters');
  }
  return normalized;
}

async function assertMaintenancePrivileges(client: PoolClient): Promise<void> {
  const result = await client.query<{
    archive_select: boolean;
    archive_insert: boolean;
    courier_select: boolean;
    courier_delete: boolean;
    courier_account_select: boolean;
    store_select: boolean;
    webhook_select: boolean;
    webhook_delete: boolean;
    verification_select: boolean;
    verification_delete: boolean;
  }>(`
    select
      has_table_privilege(current_user, 'public.durable_work_archives', 'SELECT') as archive_select,
      has_table_privilege(current_user, 'public.durable_work_archives', 'INSERT') as archive_insert,
      has_table_privilege(current_user, 'public.courier_jobs', 'SELECT') as courier_select,
      has_table_privilege(current_user, 'public.courier_jobs', 'DELETE') as courier_delete,
      has_table_privilege(current_user, 'public.courier_accounts', 'SELECT') as courier_account_select,
      has_table_privilege(current_user, 'public.stores', 'SELECT') as store_select,
      has_table_privilege(current_user, 'public.webhook_deliveries', 'SELECT') as webhook_select,
      has_table_privilege(current_user, 'public.webhook_deliveries', 'DELETE') as webhook_delete,
      has_table_privilege(current_user, 'public.verification_jobs', 'SELECT') as verification_select,
      has_table_privilege(current_user, 'public.verification_jobs', 'DELETE') as verification_delete
  `);
  const privileges = result.rows[0];
  if (
    !privileges?.archive_select ||
    !privileges.archive_insert ||
    !privileges.courier_select ||
    !privileges.courier_delete ||
    !privileges.courier_account_select ||
    !privileges.store_select ||
    !privileges.webhook_select ||
    !privileges.webhook_delete ||
    !privileges.verification_select ||
    !privileges.verification_delete
  ) {
    throw new DurableWorkRetentionError(
      'DURABLE_WORK_ARCHIVE_MAINTENANCE_ROLE_REQUIRED',
      'A reviewed maintenance identity with archive and source-delete privileges is required',
    );
  }
}

async function selectCandidates(
  client: PoolClient,
  input: NormalizedArchiveInput,
): Promise<SourceRow[]> {
  const result = await client.query<SourceRow>(
    `
      select * from (
        select
          'courier_job'::text as work_type,
          cj.id as work_id,
          s.organization_id,
          s.id as store_id,
          cj.status as terminal_status,
          cj.attempts,
          cj.error_code,
          coalesce(cj.completed_at, cj.updated_at) as terminal_at,
          cj.created_at as source_created_at
        from courier_jobs cj
        join courier_accounts ca on ca.id = cj.courier_account_id
        join stores s on s.id = ca.store_id
        where cj.status = any($1::text[])
          and coalesce(cj.completed_at, cj.updated_at) < $2

        union all

        select
          'webhook_delivery'::text as work_type,
          wd.id as work_id,
          wd.organization_id,
          wd.store_id,
          wd.status as terminal_status,
          wd.attempts,
          wd.error_code,
          coalesce(wd.completed_at, wd.updated_at) as terminal_at,
          wd.created_at as source_created_at
        from webhook_deliveries wd
        where wd.status = any($1::text[])
          and coalesce(wd.completed_at, wd.updated_at) < $2

        union all

        select
          'verification_job'::text as work_type,
          vj.id as work_id,
          vj.organization_id,
          vj.store_id,
          vj.status as terminal_status,
          vj.attempts,
          vj.error_code,
          coalesce(vj.completed_at, vj.updated_at) as terminal_at,
          vj.created_at as source_created_at
        from verification_jobs vj
        where vj.status = any($1::text[])
          and coalesce(vj.completed_at, vj.updated_at) < $2
      ) candidates
      order by terminal_at asc, work_type asc, work_id asc
      limit $3
    `,
    [input.statuses, input.cutoff, input.limit],
  );
  return result.rows;
}

async function lockCandidates(
  client: PoolClient,
  workType: DurableWorkType,
  ids: string[],
  input: NormalizedArchiveInput,
): Promise<SourceRow[]> {
  if (workType === 'courier_job') {
    return (
      await client.query<SourceRow>(
        `
          select
            'courier_job'::text as work_type,
            cj.id as work_id,
            s.organization_id,
            s.id as store_id,
            cj.status as terminal_status,
            cj.attempts,
            cj.error_code,
            coalesce(cj.completed_at, cj.updated_at) as terminal_at,
            cj.created_at as source_created_at
          from courier_jobs cj
          join courier_accounts ca on ca.id = cj.courier_account_id
          join stores s on s.id = ca.store_id
          where cj.id = any($1::text[])
            and cj.status = any($2::text[])
            and coalesce(cj.completed_at, cj.updated_at) < $3
          order by terminal_at asc, cj.id asc
          for update of cj skip locked
        `,
        [ids, input.statuses, input.cutoff],
      )
    ).rows;
  }
  const table = workType === 'webhook_delivery' ? 'webhook_deliveries' : 'verification_jobs';
  const alias = workType === 'webhook_delivery' ? 'wd' : 'vj';
  const typeLiteral = workType;
  return (
    await client.query<SourceRow>(
      `
        select
          '${typeLiteral}'::text as work_type,
          ${alias}.id as work_id,
          ${alias}.organization_id,
          ${alias}.store_id,
          ${alias}.status as terminal_status,
          ${alias}.attempts,
          ${alias}.error_code,
          coalesce(${alias}.completed_at, ${alias}.updated_at) as terminal_at,
          ${alias}.created_at as source_created_at
        from ${table} ${alias}
        where ${alias}.id = any($1::text[])
          and ${alias}.status = any($2::text[])
          and coalesce(${alias}.completed_at, ${alias}.updated_at) < $3
        order by terminal_at asc, ${alias}.id asc
        for update of ${alias} skip locked
      `,
      [ids, input.statuses, input.cutoff],
    )
  ).rows;
}

async function ensureArchiveEvidence(
  client: PoolClient,
  row: SourceRow,
  archiveRunId: string,
  archivedAt: Date,
): Promise<ArchiveRow> {
  await client.query(
    `
      insert into durable_work_archives (
        work_type, work_id, organization_id, store_id, terminal_status,
        attempts, error_code, terminal_at, source_created_at, archived_at, archive_run_id, archived_by
      ) values ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, current_user)
      on conflict (work_type, work_id) do nothing
    `,
    [
      row.work_type,
      row.work_id,
      row.organization_id,
      row.store_id,
      row.terminal_status,
      row.attempts,
      row.error_code,
      row.terminal_at,
      row.source_created_at,
      archivedAt,
      archiveRunId,
    ],
  );
  const existing = await client.query<ArchiveRow>(
    `
      select
        work_type, work_id, organization_id, store_id, terminal_status,
        attempts, error_code, terminal_at, source_created_at, archived_at, archive_run_id, archived_by
      from durable_work_archives
      where work_type = $1 and work_id = $2
      for update
    `,
    [row.work_type, row.work_id],
  );
  const evidence = existing.rows[0];
  if (!evidence || !archiveMatchesSource(evidence, row)) {
    throw new DurableWorkRetentionError(
      'DURABLE_WORK_ARCHIVE_EVIDENCE_CONFLICT',
      'Existing archive evidence does not match the locked terminal work row',
    );
  }
  return evidence;
}

async function deleteSourceRow(client: PoolClient, row: SourceRow): Promise<void> {
  const table =
    row.work_type === 'courier_job'
      ? 'courier_jobs'
      : row.work_type === 'webhook_delivery'
        ? 'webhook_deliveries'
        : 'verification_jobs';
  const deleted = await client.query(`delete from ${table} where id = $1 and status = $2`, [
    row.work_id,
    row.terminal_status,
  ]);
  if (deleted.rowCount !== 1) {
    throw new DurableWorkRetentionError(
      'DURABLE_WORK_ARCHIVE_STATE_CHANGED',
      'Locked terminal work could not be deleted after archive evidence was persisted',
    );
  }
}

function archiveMatchesSource(archive: ArchiveRow, source: SourceRow): boolean {
  return (
    archive.organization_id === source.organization_id &&
    archive.store_id === source.store_id &&
    archive.terminal_status === source.terminal_status &&
    archive.attempts === source.attempts &&
    archive.error_code === source.error_code &&
    toDate(archive.terminal_at).getTime() === toDate(source.terminal_at).getTime() &&
    toDate(archive.source_created_at).getTime() === toDate(source.source_created_at).getTime()
  );
}

function mapCandidate(row: SourceRow): DurableWorkArchiveCandidate {
  return {
    workType: row.work_type,
    workId: row.work_id,
    organizationId: row.organization_id,
    storeId: row.store_id,
    terminalStatus: row.terminal_status,
    attempts: row.attempts,
    errorCode: row.error_code,
    terminalAt: toDate(row.terminal_at).toISOString(),
    sourceCreatedAt: toDate(row.source_created_at).toISOString(),
  };
}

function mapArchive(row: ArchiveRow): DurableWorkArchiveRecord {
  return {
    ...mapCandidate(row),
    archivedAt: toDate(row.archived_at).toISOString(),
    archiveRunId: row.archive_run_id,
    archivedBy: row.archived_by,
  };
}

function toDate(value: Date | string): Date {
  return value instanceof Date ? value : new Date(value);
}

function isValidDate(value: Date): boolean {
  return !Number.isNaN(value.getTime());
}

function invalidInput(message: string): DurableWorkRetentionError {
  return new DurableWorkRetentionError('DURABLE_WORK_ARCHIVE_INPUT_INVALID', message);
}
