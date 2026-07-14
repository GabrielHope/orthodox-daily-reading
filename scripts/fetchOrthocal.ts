import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');

interface OrthocalReading {
  source: string;
  book: string;
  display: string;
  passage: { content: string; paragraph_start: boolean }[];
}

interface OrthocalDay {
  year: number;
  month: number;
  day: number;
  pascha_distance: number;
  titles: string[];
  summary_title: string;
  saints: string[];
  readings: OrthocalReading[];
}

const CORE_BOOKS = ['Isaiah', 'Genesis', 'Proverbs'];

async function fetchJulianDay(julianYear: number, julianMonth: number, julianDay: number) {
  const gregorianEquivalent = new Date(Date.UTC(julianYear, julianMonth - 1, julianDay + 13));

  const y = gregorianEquivalent.getUTCFullYear();
  const m = gregorianEquivalent.getUTCMonth() + 1;
  const d = gregorianEquivalent.getUTCDate();

  const url = `https://orthocal.info/api/julian/${y}/${m}/${d}/`;
  const res = await fetch(url);
  const data: OrthocalDay = await res.json();

  if (data.month !== julianMonth || data.day !== julianDay) {
    console.warn(
      `WARNING: requested Julian ${julianMonth}-${julianDay} but API returned ${data.month}-${data.day}. Check the date math.`
    );
  }

  return data;
}

function bookFromCitation(citation: string): string {
  const match = citation.match(/^(.*)\s+[\d.\-:]+$/);
  return match ? match[1].trim() : citation.trim();
}

function formatDay(data: OrthocalDay): string {
  const fixedDateKey = `${String(data.month).padStart(2, '0')}-${String(data.day).padStart(2, '0')}`;
  const lines: string[] = [];

  lines.push(`## Julian ${fixedDateKey} (paschaOffset: ${data.pascha_distance})`);
  if (data.titles && data.titles.length) lines.push(`**Title(s):** ${data.titles.join(', ')}`);

  lines.push(`\n**Saints:**`);
  data.saints.forEach((saintName, index) => {
    const tier = index === 0 ? 'headline' : 'full';
    lines.push(`- [${tier}] ${saintName}`);
  });

  lines.push(`\n**Readings:**`);
  for (const r of data.readings) {
    const book = bookFromCitation(r.display);
    const tier = CORE_BOOKS.includes(book) ? 'core' : 'full';
    const text = r.passage.map((p) => p.content).join(' ');
    lines.push(`- [tier: ${tier}] [service: ${r.source}] ${r.display}`);
    lines.push(`  > ${text}`);
  }
  lines.push('');
  return lines.join('\n');
}

async function main() {
  const targetDates: [number, number, number][] = [
    [2027, 3, 9],
    [2027, 3, 10],
    [2027, 3, 11],
    [2027, 3, 12],
    [2027, 3, 13],
  ];

  const output: string[] = [];

  for (const [y, m, d] of targetDates) {
    try {
      const data = await fetchJulianDay(y, m, d);
      output.push(formatDay(data));
      await new Promise((resolve) => setTimeout(resolve, 300));
    } catch (err) {
      console.error(`Failed to fetch Julian ${m}-${d}:`, err);
    }
  }

  console.log(output.join('\n---\n'));
}

main();
