alter table webhook_deliveries
  add column organization_id text references organizations(id) on delete cascade,
  add column store_id text references stores(id) on delete cascade,
  add column event_type text not null default 'legacy.unknown',
  add column event_payload jsonb not null default '{}'::jsonb,
  add column occurred_at timestamptz not null default now(),
  add column claimed_by text,
  add column claimed_at timestamptz,
  add column lease_expires_at timestamptz,
  add column completed_at timestamptz;

update webhook_deliveries wd
set organization_id = we.organization_id,
    store_id = we.store_id,
    status = case
      when wd.event_type = 'legacy.unknown' and wd.status not in ('delivered', 'failed') then 'failed'
      else wd.status
    end,
    error_code = case
      when wd.event_type = 'legacy.unknown' and wd.status not in ('delivered', 'failed')
        then coalesce(wd.error_code, 'LEGACY_EVENT_PAYLOAD_MISSING')
      else wd.error_code
    end,
    completed_at = case
      when wd.event_type = 'legacy.unknown' and wd.status not in ('delivered', 'failed') then now()
      else wd.completed_at
    end
from webhook_endpoints we
where we.id = wd.endpoint_id;

alter table webhook_deliveries
  alter column organization_id set not null,
  alter column event_type drop default,
  alter column event_payload drop default,
  alter column occurred_at drop default;

create index webhook_deliveries_claim_idx
  on webhook_deliveries(status, next_attempt_at, lease_expires_at);

create index webhook_deliveries_scope_idx
  on webhook_deliveries(organization_id, store_id, created_at desc);
