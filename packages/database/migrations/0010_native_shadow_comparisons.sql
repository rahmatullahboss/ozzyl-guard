create unique index risk_assessments_scope_reference_unique
  on risk_assessments(id, organization_id, store_id);

create table integration_shadow_comparisons (
  id text primary key,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text not null references stores(id) on delete cascade,
  api_key_id text references api_keys(id) on delete set null,
  integration text not null,
  external_order_id text not null,
  idempotency_key text not null,
  assessment_id text not null,
  legacy_score integer not null check (legacy_score between 0 and 100),
  legacy_decision text not null,
  guard_score integer not null check (guard_score between 0 and 100),
  guard_decision text not null,
  guard_confidence numeric(5, 4) not null check (guard_confidence between 0 and 1),
  decision_changed boolean not null,
  score_delta integer not null check (score_delta between -100 and 100),
  rollout_version text not null,
  sample_bucket integer not null check (sample_bucket between 0 and 9999),
  sample_rate_bps integer not null check (sample_rate_bps between 1 and 10000),
  evaluated_at timestamptz not null,
  created_at timestamptz not null default now(),
  foreign key (assessment_id, organization_id, store_id)
    references risk_assessments(id, organization_id, store_id)
    on delete cascade,
  unique (organization_id, store_id, integration, idempotency_key)
);

create index integration_shadow_comparisons_store_created_idx
  on integration_shadow_comparisons(store_id, created_at desc);

create index integration_shadow_comparisons_assessment_idx
  on integration_shadow_comparisons(assessment_id);
