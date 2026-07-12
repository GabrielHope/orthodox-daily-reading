/**
 * Offsets in days from Pascha for major moveable feasts and fasting periods.
 * All offsets verified against:
 *  - Pascha 2025 (April 20) / Clean Monday 2025 (March 3) = 48-day gap
 *  - Wikipedia: Eastern Orthodox liturgical calendar (Palm Sunday, Pentecost)
 *  - Standard Triodion/Pentecostarion structure (see derivation notes below)
 *
 * Derivation note: the pre-Lenten Triodion Sundays are each exactly 7 days
 * apart, but Clean Monday falls the day AFTER the fourth Sunday (Cheesefare),
 * making it 22 days after the first Sunday (Publican & Pharisee), not 21.
 */
export const FEAST_OFFSETS = {
  // Triodion: pre-Lenten preparation
  publicanAndPharisee: -70,   // 1st preparatory Sunday
  prodigalSon: -63,           // 2nd preparatory Sunday
  meatfare: -56,              // 3rd preparatory Sunday (Last Judgment / Judgement Sunday)
  cheesefare: -49,            // 4th preparatory Sunday (Forgiveness Sunday)

  // Great Lent
  greatLentStart: -48,        // Clean Monday
  lazarusSaturday: -8,
  palmSunday: -7,

  // Holy Week
  holyThursday: -3,
  holyFriday: -2,
  holySaturday: -1,

  //Sundays of great lent
  sundayOfOrthodoxy: -42,      // 1st Sunday of Lent
  sundayOfGregoryPalamas: -35, // 2nd Sunday
  sundayOfTheCross: -28,       // 3rd Sunday (Veneration of the Cross)
  sundayOfJohnClimacus: -21,   // 4th Sunday
  sundayOfMaryOfEgypt: -14,    // 5th Sunday

  theodoreTyroSaturday: -43,   // Saturday of Week 1: Miracle of Kolyva, St. Theodore the Recruit

  // Pascha itself
  paschaDay: 0,

  // Pentecostarion: post-Pascha
  ascension: 39,
  pentecost: 49,              // Trinity Sunday
  allSaintsSunday: 56,
} as const;

export type FeastOffsetName = keyof typeof FEAST_OFFSETS;
