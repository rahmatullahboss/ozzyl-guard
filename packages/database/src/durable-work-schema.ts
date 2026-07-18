import {
  index,
  integer,
  pgTable,
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
    index('durable_work_replays_target_idx').on(
      table.workType,
      table.workId,
      table.createdAt,
    ),
  ],
);
