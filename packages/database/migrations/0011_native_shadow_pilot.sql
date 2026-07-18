create unique index stores_scope_reference_unique
  on stores(id, organization_id);

create unique index integration_shadow_comparisons_scope_reference_unique
  on integration_shadow_comparisons(id, organization_id, store_id);

create table integration_shadow_rollouts (
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  integration text not null,
  mode text not null check (mode in ('off', 'shadow')),
  rollout_version text not null,
  sample_rate_bps integer not null check (sample_rate_bps between 0 and 10000),
  updated_by_user_id text references users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now(),
  primary key (organization_id, store_id, integration),
  foreign key (store_id, organization_id)
    references stores(id, organization_id)
    on delete cascade,
  check (
    (mode = 'off' and sample_rate_bps = 0)
    or (mode = 'shadow' and sample_rate_bps between 1 and 10000)
  )
);

create index integration_shadow_rollouts_mode_idx
  on integration_shadow_rollouts(integration, mode, updated_at desc);

create table integration_shadow_attempts (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  api_key_id text references api_keys(id) on delete set null,
  integration text not null,
  external_order_id text not null,
  idempotency_key text not null,
  rollout_version text not null,
  sample_bucket integer not null check (sample_bucket between 0 and 9999),
  sample_rate_bps integer not null check (sample_rate_bps between 1 and 10000),
  status text not null check (
    status in ('comparison_succeeded', 'assessment_failed', 'comparison_persist_failed')
  ),
  failure_code text,
  assessment_id text,
  comparison_id text,
  evaluated_at timestamptz not null,
  created_at timestamptz not null default now(),
  foreign key (store_id, organization_id)
    references stores(id, organization_id)
    on delete cascade,
  foreign key (assessment_id, organization_id, store_id)
    references risk_assessments(id, organization_id, store_id)
    on delete cascade,
  foreign key (comparison_id, organization_id, store_id)
    references integration_shadow_comparisons(id, organization_id, store_id)
    on delete cascade,
  unique (organization_id, store_id, integration, idempotency_key),
  check (
    (status = 'comparison_succeeded'
      and failure_code is null
      and assessment_id is not null
      and comparison_id is not null)
    or (status = 'assessment_failed'
      and failure_code in ('GUARD_ASSESSMENT_FAILED', 'GUARD_TIMEOUT')
      and assessment_id is null
      and comparison_id is null)
    or (status = 'comparison_persist_failed'
      and failure_code = 'COMPARISON_PERSIST_FAILED'
      and assessment_id is not null
      and comparison_id is null)
  )
);

create index integration_shadow_attempts_store_created_idx
  on integration_shadow_attempts(store_id, created_at desc);

create index integration_shadow_attempts_status_created_idx
  on integration_shadow_attempts(integration, status, created_at desc);
