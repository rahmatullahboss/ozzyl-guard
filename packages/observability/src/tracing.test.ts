import { describe, expect, it, vi } from 'vitest';
import {
  createTracer,
  defineSpan,
  formatTraceParent,
  parsePersistedTraceContext,
  parseTraceContext,
  toPersistedTraceContext,
  type SpanPoint,
} from './tracing.js';

const TRACE_ID = '11111111111111111111111111111111';
const PARENT_SPAN_ID = '2222222222222222';
const CHILD_SPAN_ID = '3333333333333333';

const REQUEST_SPAN = defineSpan({
  name: 'ozzyl.api.request',
  kind: 'server',
  attributes: {
    method: { values: ['GET', 'POST'] },
    route: { values: ['/health', '/v1/risk-assessments'] },
    status_class: { values: ['2xx', '5xx'] },
  },
});

describe('trace context', () => {
  it('parses, normalizes, formats, and persists W3C context', () => {
    const context = parseTraceContext(
      `00-${TRACE_ID}-${PARENT_SPAN_ID}-01`,
      'vendor=value, second=other',
    );

    expect(context).toEqual({
      traceId: TRACE_ID,
      spanId: PARENT_SPAN_ID,
      traceFlags: '01',
      traceState: 'vendor=value,second=other',
    });
    expect(formatTraceParent(context!)).toBe(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`);
    expect(parsePersistedTraceContext(toPersistedTraceContext(context!))).toEqual(context);
  });

  it('rejects malformed, all-zero, unsupported-version, and unsafe tracestate values', () => {
    expect(parseTraceContext('00-00000000000000000000000000000000-2222222222222222-01')).toBeNull();
    expect(parseTraceContext(`00-${TRACE_ID}-0000000000000000-01`)).toBeNull();
    expect(parseTraceContext(`01-${TRACE_ID}-${PARENT_SPAN_ID}-01`)).toBeNull();
    expect(
      parseTraceContext(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`, 'duplicate=a,duplicate=b'),
    ).toBeNull();
    expect(
      parseTraceContext(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`, 'vendor=unsafe=value'),
    ).toBeNull();
  });
});

describe('span descriptors and recorder', () => {
  it('rejects identifier and secret-like attributes before instrumentation', () => {
    expect(() =>
      defineSpan({
        name: 'ozzyl.bad.span',
        kind: 'internal',
        attributes: { job_id: { values: ['job-1'] } },
      }),
    ).toThrow(/unsafe or unbounded/);
    expect(() =>
      defineSpan({
        name: 'ozzyl.bad.secret',
        kind: 'internal',
        attributes: { access_token: { values: ['category'] } },
      }),
    ).toThrow(/unsafe or unbounded/);
  });

  it('emits one child span with bounded attributes, status, and duration', () => {
    const points: SpanPoint[] = [];
    const clockValues = [
      new Date('2026-07-28T00:00:00.000Z'),
      new Date('2026-07-28T00:00:00.025Z'),
    ];
    const monotonicValues = [100, 125];
    const tracer = createTracer({
      service: 'api',
      environment: 'test',
      clock: () => clockValues.shift()!,
      monotonicNow: () => monotonicValues.shift()!,
      generateSpanId: () => CHILD_SPAN_ID,
      write: (_line, point) => points.push(point),
    });
    const parent = parseTraceContext(`00-${TRACE_ID}-${PARENT_SPAN_ID}-01`)!;

    const span = tracer.startSpan(REQUEST_SPAN, {
      parent,
      attributes: { method: 'POST', route: '/v1/risk-assessments' },
    });
    span.end({ status: 'ok', attributes: { status_class: '2xx' } });
    span.end({ status: 'error', attributes: { status_class: '5xx' } });

    expect(points).toEqual([
      {
        telemetry_type: 'span',
        start_time: '2026-07-28T00:00:00.000Z',
        end_time: '2026-07-28T00:00:00.025Z',
        service: 'api',
        environment: 'test',
        name: 'ozzyl.api.request',
        kind: 'server',
        trace_id: TRACE_ID,
        span_id: CHILD_SPAN_ID,
        parent_span_id: PARENT_SPAN_ID,
        trace_flags: '01',
        status: 'ok',
        duration_ms: 25,
        attributes: {
          method: 'POST',
          route: '/v1/risk-assessments',
          status_class: '2xx',
        },
      },
    ]);
  });

  it('creates a fresh root trace when no valid parent exists', () => {
    const points: SpanPoint[] = [];
    const tracer = createTracer({
      service: 'worker',
      clock: () => new Date('2026-07-28T00:00:00.000Z'),
      monotonicNow: () => 1,
      generateTraceId: () => TRACE_ID,
      generateSpanId: () => CHILD_SPAN_ID,
      write: (_line, point) => points.push(point),
    });

    const span = tracer.startSpan(defineSpan({ name: 'ozzyl.worker.operation', kind: 'consumer' }));
    span.end({ status: 'ok' });

    expect(span.context).toEqual({ traceId: TRACE_ID, spanId: CHILD_SPAN_ID, traceFlags: '01' });
    expect(points[0]).not.toHaveProperty('parent_span_id');
  });

  it('drops invalid attribute values without changing application flow', () => {
    const write = vi.fn();
    const tracer = createTracer({
      service: 'api',
      generateTraceId: () => TRACE_ID,
      generateSpanId: () => CHILD_SPAN_ID,
      write,
    });

    const span = tracer.startSpan(REQUEST_SPAN, {
      attributes: { method: 'DELETE', route: '/health' },
    });
    expect(() => span.end({ status: 'ok', attributes: { status_class: '2xx' } })).not.toThrow();
    expect(write).not.toHaveBeenCalled();
  });

  it('isolates ID generation, clock, serialization, and sink failures', () => {
    const badIdTracer = createTracer({
      service: 'api',
      generateTraceId: () => 'invalid',
      write: () => {
        throw new Error('sink unavailable');
      },
    });
    expect(() => badIdTracer.startSpan(REQUEST_SPAN).end({ status: 'error' })).not.toThrow();

    const badClockTracer = createTracer({
      service: 'api',
      clock: () => new Date('invalid'),
      generateTraceId: () => TRACE_ID,
      generateSpanId: () => CHILD_SPAN_ID,
      write: () => {
        throw new Error('must be swallowed');
      },
    });
    expect(() => badClockTracer.startSpan(REQUEST_SPAN).end({ status: 'error' })).not.toThrow();
  });
});
