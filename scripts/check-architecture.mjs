import { readFile, readdir } from 'node:fs/promises';
import path from 'node:path';

const root = process.cwd();
const violations = [];

async function sourceFiles(directory) {
  const entries = await readdir(path.join(root, directory), { withFileTypes: true });
  const files = [];
  for (const entry of entries) {
    const relative = path.join(directory, entry.name);
    if (entry.isDirectory()) files.push(...(await sourceFiles(relative)));
    else if (/\.(ts|tsx|js|mjs)$/.test(entry.name) && !/\.test\./.test(entry.name))
      files.push(relative);
  }
  return files;
}

function imports(source) {
  const matches = source.matchAll(
    /(?:import|export)\s+(?:[^'\"]*?\s+from\s+)?['\"]([^'\"]+)['\"]/g,
  );
  return [...matches].map((match) => match[1]);
}

const rules = [
  {
    directory: 'packages/risk-engine/src',
    forbidden: [
      /^node:(fs|http|https|net|tls|dns|child_process)/,
      /^(pg|drizzle-orm|playwright|undici|axios)$/,
      /^@ozzyl\/(database|courier-adapters|authentication|billing|verification)$/,
    ],
    message: 'The canonical risk engine must remain pure and I/O-free.',
  },
  {
    directory: 'apps/api/src',
    forbidden: [/playwright/, /courier-session-worker/],
    message: 'API request handlers must not import browser/session drivers.',
  },
];

for (const rule of rules) {
  for (const file of await sourceFiles(rule.directory)) {
    const source = await readFile(path.join(root, file), 'utf8');
    for (const specifier of imports(source)) {
      if (rule.forbidden.some((pattern) => pattern.test(specifier))) {
        violations.push(`${file}: forbidden import ${specifier}. ${rule.message}`);
      }
    }
  }
}

if (violations.length > 0) {
  console.error(violations.join('\n'));
  process.exit(1);
}

console.info('Architecture dependency boundaries validated');
