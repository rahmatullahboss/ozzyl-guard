import { Pool } from 'pg';
import {
  DurableWorkOperationError,
  PostgresDurableWorkOperations,
  durableWorkTypes,
  type DurableWorkType,
} from './dead-letter-operations.js';

class CliInputError extends Error {
  constructor(
    readonly code: string,
    message: string,
  ) {
    super(message);
    this.name = 'CliInputError';
  }
}

const databaseUrl = requiredEnvironment('DATABASE_URL');
const [command, ...rawArguments] = process.argv.slice(2);
const argumentsByName = parseArguments(rawArguments);
const pool = new Pool({ connectionString: databaseUrl, max: 2 });
const operations = new PostgresDurableWorkOperations(pool);

try {
  if (command === 'list') {
    const limit = optionalPositiveInteger(argumentsByName, 'limit');
    const records = await operations.listDeadLetters({
      requestedByUserId: requiredArgument(argumentsByName, 'requested-by-user-id'),
      organizationId: requiredArgument(argumentsByName, 'organization-id'),
      storeId: requiredArgument(argumentsByName, 'store-id'),
      ...(limit === undefined ? {} : { limit }),
    });
    console.log(JSON.stringify({ dead_letters: records }, null, 2));
  } else if (command === 'replay') {
    const result = await operations.replayDeadLetter({
      requestedByUserId: requiredArgument(argumentsByName, 'requested-by-user-id'),
      organizationId: requiredArgument(argumentsByName, 'organization-id'),
      storeId: requiredArgument(argumentsByName, 'store-id'),
      workType: requiredWorkType(argumentsByName),
      workId: requiredArgument(argumentsByName, 'work-id'),
      idempotencyKey: requiredArgument(argumentsByName, 'idempotency-key'),
    });
    console.log(JSON.stringify(result, null, 2));
  } else {
    throw new CliInputError(
      'COMMAND_REQUIRED',
      'Use list or replay. Run through npm scripts documented in operations-observability.md.',
    );
  }
} catch (error) {
  const code =
    error instanceof DurableWorkOperationError || error instanceof CliInputError
      ? error.code
      : 'DURABLE_WORK_OPERATION_FAILED';
  console.error(JSON.stringify({ level: 'error', code }));
  process.exitCode = 1;
} finally {
  await pool.end();
}

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

function requiredArgument(values: Map<string, string>, name: string): string {
  const value = values.get(name)?.trim();
  if (!value || value.length > 200) {
    throw new CliInputError(
      'INVALID_ARGUMENT',
      `--${name} is required and must be at most 200 characters`,
    );
  }
  return value;
}

function optionalPositiveInteger(values: Map<string, string>, name: string): number | undefined {
  const raw = values.get(name);
  if (raw === undefined) return undefined;
  const value = Number(raw);
  if (!Number.isSafeInteger(value) || value <= 0 || value > 100) {
    throw new CliInputError('INVALID_ARGUMENT', `--${name} must be an integer between 1 and 100`);
  }
  return value;
}

function requiredWorkType(values: Map<string, string>): DurableWorkType {
  const value = requiredArgument(values, 'work-type');
  if (!durableWorkTypes.includes(value as DurableWorkType)) {
    throw new CliInputError(
      'INVALID_WORK_TYPE',
      `--work-type must be one of ${durableWorkTypes.join(', ')}`,
    );
  }
  return value as DurableWorkType;
}
