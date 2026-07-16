create table verification_sessions (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  assessment_id text references risk_assessments(id) on delete set null,
  external_order_id text,
  phone_hash text not null,
  purpose text not null,
  channel text not null,
  status text not null,
  expires_at timestamptz not null,
  verified_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index verification_sessions_scope_idx on verification_sessions(store_id, created_at desc);

create table otp_attempts (
  id text primary key,
  verification_session_id text not null references verification_sessions(id) on delete cascade,
  otp_hash text not null,
  attempt_count integer not null default 0,
  provider_message_id text,
  sent_at timestamptz,
  delivered_at timestamptz,
  failed_at timestamptz,
  expires_at timestamptz not null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table webhook_endpoints (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text references stores(id) on delete cascade,
  url text not null,
  secret_encrypted text not null,
  events jsonb not null,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index webhook_endpoints_scope_idx on webhook_endpoints(organization_id, store_id);

create table webhook_deliveries (
  id text primary key,
  endpoint_id text not null references webhook_endpoints(id) on delete cascade,
  event_id text not null,
  status text not null,
  attempts integer not null default 0,
  next_attempt_at timestamptz,
  response_status integer,
  error_code text,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (endpoint_id, event_id)
);
