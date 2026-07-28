create table durable_work_archives (
  work_type text not null
    constraint durable_work_archives_work_type_check
    check (work_type in ('courier_job', 'webhook_delivery', 'verification_job')),
  work_id text not null,
  organization_id text not null references organizations(id) on delete cascade,
  store_id text references stores(id) on delete cascade,
  terminal_status text not null
    constraint durable_work_archives_terminal_status_check
    check (terminal_status in ('completed', 'failed')),
  attempts integer not null
    constraint durable_work_archives_attempts_check
    check (attempts >= 0),
  error_code text,
  terminal_at timestamptz not null,
  source_created_at timestamptz not null,
  archived_at timestamptz not null,
  archive_run_id text not null
    constraint durable_work_archives_run_id_check
    check (archive_run_id ~ '^dwar_[A-Za-z0-9-]{8,100}$'),
  archived_by text not null,
  primary key (work_type, work_id),
  constraint durable_work_archives_store_scope_fk
    foreign key (store_id, organization_id)
    references stores(id, organization_id)
    on delete cascade
);

create index durable_work_archives_scope_archived_idx
  on durable_work_archives(organization_id, store_id, archived_at desc);

create index durable_work_archives_terminal_idx
  on durable_work_archives(work_type, terminal_status, terminal_at);
