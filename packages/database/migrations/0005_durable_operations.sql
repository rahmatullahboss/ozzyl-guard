alter table courier_jobs
  add column payload jsonb not null default '{}'::jsonb;

alter table order_outcomes
  add column idempotency_key text,
  add column phone_hash text;

update order_outcomes
set idempotency_key = id
where idempotency_key is null;

alter table order_outcomes
  alter column idempotency_key set not null;

drop index if exists order_outcomes_unique;

create unique index order_outcomes_idempotency_unique
  on order_outcomes(organization_id, store_id, idempotency_key);

create index order_outcomes_phone_idx
  on order_outcomes(store_id, phone_hash, occurred_at desc);

create table idempotency_records (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  operation text not null,
  idempotency_key text not null,
  response jsonb not null,
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, store_id, operation, idempotency_key)
);

create index idempotency_records_expiry_idx on idempotency_records(expires_at);
