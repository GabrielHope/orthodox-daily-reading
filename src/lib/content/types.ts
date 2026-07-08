/**
 * Core content types for the Orthodox Daily Reading site.
 * Each piece of textual content is stored in three length tiers
 * (short/medium/long) rather than auto-summarized, to preserve
 * tone and accuracy across the reading-length slider.
 */

export interface LengthTiers {
  short: string;   // ~1 min read
  medium: string;  // ~5 min read
  long: string;    // ~15 min read
}

export interface Saint {
  id: string;                  // e.g. "gregory-palamas"
  name: string;                // e.g. "St. Gregory Palamas, Archbishop of Thessalonica"
  fixedDateKey?: string;       // Julian "MM-DD", if this is a fixed commemoration
  moveableFeast?: string;      // key from FEAST_OFFSETS, if tied to Pascha (rare for saints, common for feast-linked commemorations)
  bio: LengthTiers;
  sourceAttribution: string;   // e.g. "Adapted from public-domain Synaxaristes; see also OrthodoxWiki (CC-BY-SA)"
}

export interface ScriptureReading {
  id: string;
  citation: string;            // e.g. "Matthew 5:14-19"
  translationSource: 'KJV' | 'Brenton LXX';
  fullText: string;             // the actual passage text
  fixedDateKey?: string;
  moveableFeast?: string;
}

export interface WisdomQuote {
  id: string;
  author: string;               // e.g. "St. John Chrysostom"
  sourceCitation: string;       // e.g. "Homily 15 on Matthew, NPNF1 Vol. 10"
  quote: LengthTiers;
  sourceAttribution: string;    // e.g. "Public domain, CCEL - Nicene and Post-Nicene Fathers"
  fixedDateKey?: string;
  moveableFeast?: string;
}

export interface DailyComposition {
  date: string;                 // ISO date string, "2027-04-19"
  calendarMode: 'old' | 'new';
  saintIds: string[];
  scriptureId: string;
  wisdomId: string;
}
