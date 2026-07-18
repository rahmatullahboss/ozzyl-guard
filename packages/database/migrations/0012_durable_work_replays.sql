create table durable_work_replays (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  requested_by_user_id text references users(id) on delete set null,
  work_type text not null
    constraint durable_work_replays_work_type_check
    check (work_type in ('courier_job', 'webhook_delivery', 'verification_job')),
  work_id text not null,
  idempotency_key text not null,
  previous_status text not null
    constraint durable_work_replays_previous_status_check
    check (previous_status = 'failed'),
  previous_error_code text,
  previous_attempts integer not null
    constraint durable_work_replays_previous_attempts_check
    check (previous_attempts >= 0),
  replayed_status text not null
    constraint durable_work_replays_replayed_status_check
    check (replayed_status = 'queued'),
  replayed_at timestamptz not null,
  created_at timestamptz not null default now(),
  constraint durable_work_replays_store_scope_fk
    foreign key (store_id, organization_id)
    references stores(id, organization_id)
    on delete cascade,
  constraint durable_work_replays_idempotency_unique
    unique (organization_id, store_id, idempotency_key)
);

create index durable_work_replays_scope_created_idx
  on durable_work_replays(organization_id, store_id, created_at desc);

create index durable_work_replays_target_idx
  on durable_work_replays(work_type, work_id, created_at desc);
