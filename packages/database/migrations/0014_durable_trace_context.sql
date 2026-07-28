alter table courier_jobs
  add column trace_parent text,
  add column trace_state text;

alter table webhook_deliveries
  add column trace_parent text,
  add column trace_state text;

alter table verification_jobs
  add column trace_parent text,
  add column trace_state text;

alter table courier_jobs
  add constraint courier_jobs_trace_parent_valid check (
    trace_parent is null or (
      trace_parent ~ '^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$'
      and substring(trace_parent from 4 for 32) <> repeat('0', 32)
      and substring(trace_parent from 37 for 16) <> repeat('0', 16)
    )
  ),
  add constraint courier_jobs_trace_state_valid check (
    trace_state is null or (
      trace_parent is not null
      and char_length(trace_state) between 1 and 512
      and trace_state !~ '[[:cntrl:]]'
    )
  );

alter table webhook_deliveries
  add constraint webhook_deliveries_trace_parent_valid check (
    trace_parent is null or (
      trace_parent ~ '^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$'
      and substring(trace_parent from 4 for 32) <> repeat('0', 32)
      and substring(trace_parent from 37 for 16) <> repeat('0', 16)
    )
  ),
  add constraint webhook_deliveries_trace_state_valid check (
    trace_state is null or (
      trace_parent is not null
      and char_length(trace_state) between 1 and 512
      and trace_state !~ '[[:cntrl:]]'
    )
  );

alter table verification_jobs
  add constraint verification_jobs_trace_parent_valid check (
    trace_parent is null or (
      trace_parent ~ '^00-[0-9a-f]{32}-[0-9a-f]{16}-[0-9a-f]{2}$'
      and substring(trace_parent from 4 for 32) <> repeat('0', 32)
      and substring(trace_parent from 37 for 16) <> repeat('0', 16)
    )
  ),
  add constraint verification_jobs_trace_state_valid check (
    trace_state is null or (
      trace_parent is not null
      and char_length(trace_state) between 1 and 512
      and trace_state !~ '[[:cntrl:]]'
    )
  );
