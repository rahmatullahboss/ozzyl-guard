create table plans (
  id text primary key,
  code text not null unique,
  name text not null,
  entitlements jsonb not null,
  active boolean not null default true,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table users (
  id text primary key,
  email text not null unique,
  password_hash text,
  managed_auth_id text unique,
  email_verified_at timestamptz,
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  constraint users_auth_method_check check (password_hash is not null or managed_auth_id is not null)
);

create table user_sessions (
  id text primary key,
  user_id text not null references users(id) on delete cascade,
  token_hash text not null unique,
  expires_at timestamptz not null,
  revoked_at timestamptz,
  created_at timestamptz not null default now()
);
create index user_sessions_user_idx on user_sessions(user_id);
create index user_sessions_expiry_idx on user_sessions(expires_at);

create table organizations (
  id text primary key,
  name text not null,
  slug text not null unique,
  plan_id text references plans(id),
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table organization_members (
  organization_id text not null references organizations(id) on delete cascade,
  user_id text not null references users(id) on delete cascade,
  role text not null,
  permissions jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (organization_id, user_id)
);
create index organization_members_user_idx on organization_members(user_id);

create table stores (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  name text not null,
  platform text not null,
  external_store_id text,
  timezone text not null default 'Asia/Dhaka',
  currency text not null default 'BDT',
  status text not null default 'active',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, platform, external_store_id)
);
create index stores_organization_idx on stores(organization_id);

create table api_keys (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text references stores(id) on delete cascade,
  environment text not null check (environment in ('test', 'live')),
  key_hash text not null unique,
  key_prefix text not null,
  name text not null,
  scopes jsonb not null default '[]'::jsonb,
  allowed_origins jsonb not null default '[]'::jsonb,
  last_used_at timestamptz,
  expires_at timestamptz,
  revoked_at timestamptz,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);
create index api_keys_scope_idx on api_keys(organization_id, store_id);
create index api_keys_prefix_idx on api_keys(key_prefix);

create table usage_events (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  api_key_id text references api_keys(id) on delete set null,
  event_type text not null,
  units integer not null default 1 check (units > 0),
  request_id text not null,
  response_ms integer,
  status_code integer,
  period text not null,
  created_at timestamptz not null default now(),
  unique (organization_id, event_type, request_id)
);
create index usage_events_period_idx on usage_events(organization_id, period);

create table audit_events (
  id text primary key,
  organization_id text references organizations(id) on delete set null,
  actor_type text not null,
  actor_id text,
  action text not null,
  target_type text,
  target_id text,
  metadata jsonb not null default '{}'::jsonb,
  created_at timestamptz not null default now()
);
create index audit_events_scope_idx on audit_events(organization_id, created_at desc);

insert into plans (id, code, name, entitlements) values
  ('plan_free', 'free', 'Free', '{"monthlyAssessments":100,"stores":1,"teamMembers":1}'),
  ('plan_starter', 'starter', 'Starter', '{"monthlyAssessments":5000,"stores":3,"teamMembers":5}'),
  ('plan_pro', 'pro', 'Pro', '{"monthlyAssessments":50000,"stores":20,"teamMembers":25}'),
  ('plan_enterprise', 'enterprise', 'Enterprise', '{"monthlyAssessments":null,"stores":null,"teamMembers":null}')
on conflict (id) do nothing;
