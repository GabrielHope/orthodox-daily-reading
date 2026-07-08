import dns from 'node:dns';
dns.setDefaultResultOrder('ipv4first');
import * as cheerio from 'cheerio';

async function fetchCcelText(url: string) {
  const res = await fetch(url);
  const html = await res.text();
  const $ = cheerio.load(html);
  $('script, style, nav, header, footer').remove();
  const text = $('body').text().replace(/\s+/g, ' ').trim();
  console.log(text);
}

const url = process.argv[2];
if (!url) {
  console.error('Usage: npx tsx scripts/fetchCcel.ts <ccel-url>');
  process.exit(1);
}
fetchCcelText(url);
