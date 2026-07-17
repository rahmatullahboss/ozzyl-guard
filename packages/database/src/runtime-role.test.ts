import { describe, expect, it } from 'vitest';
import {
  MIGRATION_HISTORY_TABLE,
  runtimeRolePolicy,
  validateRuntimeRoleName,
} from './runtime-role.js';

describe('runtime role policy', () => {
  it('accepts only simple PostgreSQL role identifiers', () => {
    expect(validateRuntimeRoleName('ozzyl_guard_runtime')).toBe('ozzyl_guard_runtime');
    for (const invalid of [
      '',
      'runtime-role',
      'runtime role',
      '1runtime',
      'x'.repeat(64),
      'x";drop role',
    ]) {
      expect(() => validateRuntimeRoleName(invalid)).toThrow();
    }
  });

  it('keeps migration history and delete privileges outside the runtime policy', () => {
    expect(runtimeRolePolicy.select).not.toContain(MIGRATION_HISTORY_TABLE);
    expect(runtimeRolePolicy.insert).not.toContain(MIGRATION_HISTORY_TABLE);
    expect(runtimeRolePolicy.update).not.toContain(MIGRATION_HISTORY_TABLE);
    expect(runtimeRolePolicy).not.toHaveProperty('delete');
  });

  it('requires every writable table to remain explicitly readable', () => {
    const readable = new Set<string>(runtimeRolePolicy.select);
    expect(runtimeRolePolicy.insert.every((table) => readable.has(table))).toBe(true);
    expect(runtimeRolePolicy.update.every((table) => readable.has(table))).toBe(true);
  });
});
