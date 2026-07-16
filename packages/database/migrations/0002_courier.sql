create table courier_accounts (
  id text primary key,
  store_id text not null references stores(id) on delete cascade,
  provider text not null,
  status text not null default 'pending',
  credential_version integer not null default 1,
  last_connected_at timestamptz,
  last_success_at timestamptz,
  last_failure_at timestamptz,
  failure_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (store_id, provider)
);

create table courier_credentials (
  courier_account_id text primary key references courier_accounts(id) on delete cascade,
  encrypted_payload text not null,
  encryption_key_version text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table courier_sessions (
  courier_account_id text primary key references courier_accounts(id) on delete cascade,
  encrypted_payload text not null,
  encryption_key_version text not null,
  expires_at timestamptz,
  validated_at timestamptz,
  status text not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table courier_observations (
  id text primary key,
  store_id text not null references stores(id) on delete cascade,
  provider text not null,
  phone_hash text not null,
  total_orders integer not null check (total_orders >= 0),
  delivered_orders integer not null check (delivered_orders >= 0),
  returned_orders integer not null check (returned_orders >= 0),
  cancelled_before_shipping integer not null check (cancelled_before_shipping >= 0),
  success_rate numeric(5,4),
  confidence numeric(5,4) not null check (confidence between 0 and 1),
  source_type text not null,
  observed_at timestamptz not null,
  expires_at timestamptz not null,
  raw_payload_encrypted text,
  created_at timestamptz not null default now()
);
create index courier_observations_latest_idx
  on courier_observations(store_id, phone_hash, provider, observed_at desc);

create table courier_jobs (
  id text primary key,
  courier_account_id text not null references courier_accounts(id) on delete cascade,
  job_type text not null,
  status text not null,
  attempts integer not null default 0,
  scheduled_at timestamptz not null,
  started_at timestamptz,
  completed_at timestamptz,
  error_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index courier_jobs_schedule_idx on courier_jobs(status, scheduled_at);
