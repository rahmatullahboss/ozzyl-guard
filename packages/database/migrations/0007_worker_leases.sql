alter table courier_jobs
  add column claimed_by text,
  add column claimed_at timestamptz,
  add column lease_expires_at timestamptz;

update courier_jobs
set claimed_at = coalesce(started_at, updated_at, now()),
    lease_expires_at = now() + interval '5 minutes'
where status in ('claimed', 'processing');

create index courier_jobs_claim_idx
  on courier_jobs(status, scheduled_at, lease_expires_at);
