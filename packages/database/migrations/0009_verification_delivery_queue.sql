alter table verification_sessions
  add column idempotency_key text,
  add column max_attempts integer not null default 5;

create unique index verification_sessions_idempotency_unique
  on verification_sessions(organization_id, store_id, idempotency_key);

create table verification_jobs (
  id text primary key,
  verification_session_id text not null references verification_sessions(id) on delete cascade,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  job_type text not null default 'send_otp',
  payload_encrypted text not null,
  status text not null default 'queued',
  attempts integer not null default 0,
  next_attempt_at timestamptz,
  provider_message_id text,
  error_code text,
  claimed_by text,
  claimed_at timestamptz,
  lease_expires_at timestamptz,
  completed_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (verification_session_id, job_type)
);

create index verification_jobs_claim_idx
  on verification_jobs(status, next_attempt_at, lease_expires_at);

create index verification_jobs_scope_idx
  on verification_jobs(organization_id, store_id, created_at desc);
