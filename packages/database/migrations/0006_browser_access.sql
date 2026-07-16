alter table users
  add column platform_role text not null default 'merchant'
  check (platform_role in ('merchant', 'platform_admin'));

create index users_platform_role_idx on users(platform_role) where status = 'active';

create index risk_assessments_dashboard_scope_idx
  on risk_assessments(organization_id, store_id, created_at desc);

create index courier_jobs_operations_status_idx
  on courier_jobs(status, scheduled_at, created_at);

-- Rollback notes:
-- Drop the three indexes, then drop users.platform_role only after all platform-admin
-- accounts have been converted to another authorization mechanism.
