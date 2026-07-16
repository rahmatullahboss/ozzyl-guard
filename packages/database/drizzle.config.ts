import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  dialect: 'postgresql',
  schema: './packages/database/src/schema.ts',
  out: './packages/database/migrations',
  dbCredentials: {
    url:
      process.env.DATABASE_URL ?? 'postgresql://ozzyl_guard:ozzyl_guard@localhost:5432/ozzyl_guard',
  },
  strict: true,
  verbose: true,
});
