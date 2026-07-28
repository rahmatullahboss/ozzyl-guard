import {
  foreignKey,
  index,
  integer,
  pgTable,
  primaryKey,
  text,
  timestamp,
  uniqueIndex,
} from 'drizzle-orm/pg-core';
import { organizations, stores, users } from './schema.js';

export const durableWorkReplays = pgTable(
  'durable_work_replays',
  {
    id: text('id').primaryKey(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id')
      .notNull()
      .references(() => stores.id, { onDelete: 'cascade' }),
    requestedByUserId: text('requested_by_user_id').references(() => users.id, {
      onDelete: 'set null',
    }),
    workType: text('work_type').notNull(),
    workId: text('work_id').notNull(),
    idempotencyKey: text('idempotency_key').notNull(),
    previousStatus: text('previous_status').notNull(),
    previousErrorCode: text('previous_error_code'),
    previousAttempts: integer('previous_attempts').notNull(),
    replayedStatus: text('replayed_status').notNull(),
    replayedAt: timestamp('replayed_at', { withTimezone: true }).notNull(),
    createdAt: timestamp('created_at', { withTimezone: true }).notNull().defaultNow(),
  },
  (table) => [
    foreignKey({
      columns: [table.storeId, table.organizationId],
      foreignColumns: [stores.id, stores.organizationId],
      name: 'durable_work_replays_store_scope_fk',
    }).onDelete('cascade'),
    uniqueIndex('durable_work_replays_idempotency_unique').on(
      table.organizationId,
      table.storeId,
      table.idempotencyKey,
    ),
    index('durable_work_replays_scope_created_idx').on(
      table.organizationId,
      table.storeId,
      table.createdAt,
    ),
    index('durable_work_replays_target_idx').on(table.workType, table.workId, table.createdAt),
  ],
);

export const durableWorkArchives = pgTable(
  'durable_work_archives',
  {
    workType: text('work_type').notNull(),
    workId: text('work_id').notNull(),
    organizationId: text('organization_id')
      .notNull()
      .references(() => organizations.id, { onDelete: 'cascade' }),
    storeId: text('store_id').references(() => stores.id, { onDelete: 'cascade' }),
    terminalStatus: text('terminal_status').notNull(),
    attempts: integer('attempts').notNull(),
    errorCode: text('error_code'),
    terminalAt: timestamp('terminal_at', { withTimezone: true }).notNull(),
    sourceCreatedAt: timestamp('source_created_at', { withTimezone: true }).notNull(),
    archivedAt: timestamp('archived_at', { withTimezone: true }).notNull(),
    archiveRunId: text('archive_run_id').notNull(),
    archivedBy: text('archived_by').notNull(),
  },
  (table) => [
    primaryKey({ columns: [table.workType, table.workId] }),
    foreignKey({
      columns: [table.storeId, table.organizationId],
      foreignColumns: [stores.id, stores.organizationId],
      name: 'durable_work_archives_store_scope_fk',
    }).onDelete('cascade'),
    index('durable_work_archives_scope_archived_idx').on(
      table.organizationId,
      table.storeId,
      table.archivedAt,
    ),
    index('durable_work_archives_terminal_idx').on(
      table.workType,
      table.terminalStatus,
      table.terminalAt,
    ),
  ],
);
