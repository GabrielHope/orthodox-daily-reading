import type { Saint, ScriptureReading, WisdomQuote } from './types';

export const sampleSaint: Saint = {
  id: 'sample-saint',
  name: 'St. Example the Confessor',
  fixedDateKey: '04-19',
  bio: {
    short: 'A brief one-sentence summary.',
    medium: 'A paragraph-length summary of the life.',
    long: 'A fuller, multi-paragraph account.',
  },
  sourceAttribution: 'Original summary; public-domain sources',
};

export const sampleScripture: ScriptureReading = {
  id: 'sample-scripture',
  citation: 'John 1:1-5',
  translationSource: 'KJV',
  fullText: 'In the beginning was the Word...',
  fixedDateKey: '04-19',
};

export const sampleWisdom: WisdomQuote = {
  id: 'sample-wisdom',
  author: 'St. John Chrysostom',
  sourceCitation: 'Homily 1 on John, NPNF1 Vol. 14',
  quote: {
    short: 'A short excerpt.',
    medium: 'A medium excerpt.',
    long: 'A longer excerpt.',
  },
  sourceAttribution: 'Public domain, CCEL',
};
