import { Pool } from 'pg';
import {
  DurableWorkRetentionError,
  MAX_DURABLE_WORK_ARCHIVE_BATCH,
  PostgresDurableWorkRetention,
  durableWorkTerminalStatuses,
  type DurableWorkTerminalStatus,
} from './durable-work-retention.js';

const ARCHIVE_CONFIRMATION = 'ARCHIVE_TERMINAL_DURABLE_WORK';

class CliInputError extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = 'CliInputError';
  }
}

async function run(): Promise<void> {
  let pool: Pool | undefined;
  try {
    const databaseUrl = requiredEnvironment('DATABASE_URL');
    const [command, ...rawArguments] = process.argv.slice(2);
    if (command !== 'preview' && command !== 'archive') {
      throw new CliInputError(
        'COMMAND_REQUIRED',
        'Use preview or archive through the documented npm scripts',
      );
    }
    const argumentsByName = parseArguments(rawArguments);
    assertAllowedArguments(argumentsByName, command);
    const cutoff = requiredDate(argumentsByName, 'cutoff');
    const statuses = requiredStatuses(argumentsByName);
    const limit = optionalPositiveInteger(argumentsByName, 'limit') ?? 100;
    pool = new Pool({ connectionString: databaseUrl, max: 2 });
    const retention = new PostgresDurableWorkRetention(pool);

    if (command === 'preview') {
      const result = await retention.preview({ cutoff, statuses, limit });
      console.log(JSON.stringify(result, null, 2));
    } else if (command === 'archive') {
      if (requiredArgument(argumentsByName, 'confirm') !== ARCHIVE_CONFIRMATION) {
        throw new CliInputError(
          'ARCHIVE_CONFIRMATION_REQUIRED',
          `--confirm must equal ${ARCHIVE_CONFIRMATION}`,
        );
      }
      const archiveRunId = optionalArgument(argumentsByName, 'archive-run-id');
      const result = await retention.archive({
        cutoff,
        statuses,
        limit,
        ...(archiveRunId ? { archiveRunId } : {}),
      });
      console.log(JSON.stringify(result, null, 2));
    }
  } catch (error) {
    const code =
      error instanceof DurableWorkRetentionError || error instanceof CliInputError
        ? error.code
        : 'DURABLE_WORK_RETENTION_FAILED';
    console.error(JSON.stringify({ level: 'error', code }));
    process.exitCode = 1;
  } finally {
    await pool?.end();
  }
}

await run();

function requiredEnvironment(name: string): string {
  const value = process.env[name];
  if (!value) throw new CliInputError('DATABASE_URL_REQUIRED', `${name} is required`);
  return value;
}

function parseArguments(values: string[]): Map<string, string> {
  const parsed = new Map<string, string>();
  for (let index = 0; index < values.length; index += 2) {
    const flag = values[index];
    const value = values[index + 1];
    if (!flag?.startsWith('--') || !value || value.startsWith('--')) {
      throw new CliInputError('INVALID_ARGUMENTS', 'Arguments must use --name value pairs');
    }
    const name = flag.slice(2);
    if (parsed.has(name)) {
      throw new CliInputError('DUPLICATE_ARGUMENT', `Argument --${name} was provided twice`);
    }
    parsed.set(name, value);
  }
  return parsed;
}

function assertAllowedArguments(values: Map<string, string>, command: 'preview' | 'archive'): void {
  const allowed = new Set(['cutoff', 'status', 'limit']);
  if (command === 'archive') {
    allowed.add('confirm');
    allowed.add('archive-run-id');
  }
  for (const name of values.keys()) {
    if (!allowed.has(name)) {
      throw new CliInputError('UNKNOWN_ARGUMENT', `Unknown argument --${name}`);
    }
  }
}

function requiredArgument(values: Map<string, string>, name: string): string {
  const value = optionalArgument(values, name);
  if (!value) throw new CliInputError('INVALID_ARGUMENT', `--${name} is required`);
  return value;
}

function optionalArgument(values: Map<string, string>, name: string): string | undefined {
  const value = values.get(name)?.trim();
  if (value === undefined) return undefined;
  if (!value || value.length > 200) {
    throw new CliInputError(
      'INVALID_ARGUMENT',
      `--${name} must be non-empty and at most 200 characters`,
    );
  }
  return value;
}

function requiredDate(values: Map<string, string>, name: string): Date {
  const value = new Date(requiredArgument(values, name));
  if (Number.isNaN(value.getTime())) {
    throw new CliInputError('INVALID_ARGUMENT', `--${name} must be an ISO-8601 timestamp`);
  }
  return value;
}

function requiredStatuses(values: Map<string, string>): DurableWorkTerminalStatus[] {
  const value = requiredArgument(values, 'status');
  if (value === 'all') return [...durableWorkTerminalStatuses];
  if (durableWorkTerminalStatuses.includes(value as DurableWorkTerminalStatus)) {
    return [value as DurableWorkTerminalStatus];
  }
  throw new CliInputError('INVALID_ARGUMENT', '--status must be completed, failed, or all');
}

function optionalPositiveInteger(values: Map<string, string>, name: string): number | undefined {
  const raw = values.get(name);
  if (raw === undefined) return undefined;
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value < 1 || value > MAX_DURABLE_WORK_ARCHIVE_BATCH) {
    throw new CliInputError(
      'INVALID_ARGUMENT',
      `--${name} must be an integer between 1 and ${MAX_DURABLE_WORK_ARCHIVE_BATCH}`,
    );
  }
  return value;
}
