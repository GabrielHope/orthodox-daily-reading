import { writeFileSync } from 'fs';

const [type, id] = process.argv.slice(2);
if (!type || !id || !['saint', 'scripture', 'wisdom'].includes(type)) {
  console.error('Usage: npx tsx scripts/newContent.ts <saint|scripture|wisdom> <id>');
  process.exit(1);
}

const templates: Record<string, string> = {
  saint: `import type { Saint } from '@/lib/content/types';

export const ${toCamel(id)}: Saint = {
  id: '${id}',
  name: '',
  fixedDateKey: '', // or moveableFeast: '',
  bio: { short: '', medium: '', long: '' },
  sourceAttribution: '',
};
`,
  scripture: `import type { ScriptureReading } from '@/lib/content/types';

export const ${toCamel(id)}: ScriptureReading = {
  id: '${id}',
  citation: '',
  translationSource: 'KJV',
  fullText: '',
  fixedDateKey: '', // or moveableFeast: '',
};
`,
  wisdom: `import type { WisdomQuote } from '@/lib/content/types';

export const ${toCamel(id)}: WisdomQuote = {
  id: '${id}',
  author: '',
  sourceCitation: '',
  quote: { short: '', medium: '', long: '' },
  sourceAttribution: '',
  fixedDateKey: '', // or moveableFeast: '',
};
`,
};

function toCamel(s: string): string {
  return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
}

const folder = { saint: 'saints', scripture: 'scripture', wisdom: 'wisdom' }[type];
const path = `src/content/${folder}/${id}.ts`;
writeFileSync(path, templates[type]);
console.log(`Created ${path}`);
