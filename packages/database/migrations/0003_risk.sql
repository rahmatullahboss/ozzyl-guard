create table risk_policies (
  id text primary key,
  store_id text not null references stores(id) on delete cascade,
  version text not null,
  policy jsonb not null,
  active boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (store_id, version)
);
create unique index risk_policies_one_active_idx on risk_policies(store_id) where active = true;

create table risk_assessments (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  api_key_id text references api_keys(id) on delete set null,
  external_order_id text,
  idempotency_key text not null,
  phone_hash text not null,
  order_snapshot jsonb not null,
  score integer not null check (score between 0 and 100),
  confidence numeric(5,4) not null check (confidence between 0 and 1),
  risk_level text not null,
  decision text not null,
  engine_version text not null,
  policy_version text not null,
  degraded boolean not null default false,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  unique (organization_id, store_id, idempotency_key)
);
create index risk_assessments_store_created_idx on risk_assessments(store_id, created_at desc);

create table risk_signals (
  id text primary key,
  assessment_id text not null references risk_assessments(id) on delete cascade,
  code text not null,
  category text not null,
  score integer not null,
  confidence numeric(5,4),
  description text not null,
  evidence_reference text,
  created_at timestamptz not null default now()
);
create index risk_signals_assessment_idx on risk_signals(assessment_id);

create table order_outcomes (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  external_order_id text not null,
  assessment_id text references risk_assessments(id) on delete set null,
  outcome text not null,
  provider text,
  reason text,
  source text not null,
  occurred_at timestamptz not null,
  created_at timestamptz not null default now(),
  unique (store_id, external_order_id, outcome, occurred_at)
);
