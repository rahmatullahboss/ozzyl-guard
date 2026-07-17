from pathlib import Path


def replace_once(path: str, old: str, new: str) -> None:
    target = Path(path)
    text = target.read_text()
    count = text.count(old)
    if count != 1:
        raise SystemExit(f"Expected one match in {path}, found {count}: {old[:120]!r}")
    target.write_text(text.replace(old, new))


replace_once(
    "apps/api/src/postgres.ts",
    """export class PostgresOutcomeRepository implements OutcomeRepository {
  constructor(private readonly pool: Pool) {}

  async save(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
    outcome: OrderOutcomeInput;
  }): Promise<{ outcomeId: string; replay: boolean }> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      let phoneHash: string | null = null;
""",
    """export class PostgresOutcomeRepository implements OutcomeRepository {
  constructor(private readonly pool: Pool) {}

  async save(input: {
    organizationId: string;
    storeId: string;
    idempotencyKey: string;
    outcome: OrderOutcomeInput;
  }): Promise<{ outcomeId: string; replay: boolean }> {
    const client = await this.pool.connect();
    try {
      await client.query('begin');
      await client.query('select pg_advisory_xact_lock(hashtext($1))', [
        `${input.organizationId}:${input.storeId}:outcome:${input.idempotencyKey}`,
      ]);
      let phoneHash: string | null = null;
""",
)

replace_once(
    "apps/api/src/postgres-concurrency.test.ts",
    """    await pool.query(
      `
        update verification_sessions set status = 'pending' where id = $1;
        update verification_jobs set status = 'delivered', completed_at = now() where verification_session_id = $1;
      `,
      [verificationId],
    );
""",
    """    await pool.query(
      `update verification_sessions set status = 'pending' where id = $1`,
      [verificationId],
    );
    await pool.query(
      `update verification_jobs set status = 'delivered', completed_at = now() where verification_session_id = $1`,
      [verificationId],
    );
""",
)
