import { julianToGregorian } from './julian';

/**
 * Calculates the date of Orthodox Pascha (Easter) for a given year,
 * using Meeus's algorithm for the Julian calendar.
 *
 * Returns the date in the JULIAN calendar. Use julianToGregorian()
 * separately if you need the Gregorian-calendar date for display.
 */
export function getPaschaJulian(year: number): Date {
  const a = year % 4;
  const b = year % 7;
  const c = year % 19;

  const d = (19 * c + 15) % 30;
  const e = (2 * a + 4 * b - d + 34) % 7;

  const month = Math.floor((d + e + 114) / 31); // 3 = March, 4 = April
  const day = ((d + e + 114) % 31) + 1;

  // month is 1-indexed here (3 or 4), but JS Date months are 0-indexed
  return new Date(Date.UTC(year, month - 1, day));
}

/**
 * Convenience function: Pascha's date in the Gregorian calendar,
 * for "New Calendar" display.
 */
export function getPaschaGregorian(year: number): Date {
  return julianToGregorian(getPaschaJulian(year));
}

/**
 * Given a year and an offset in days from Pascha, returns that
 * moveable feast's date. E.g. offset = -7 for Palm Sunday,
 * offset = 49 for Pentecost, offset = -70 for start of Triodion.
 */
export function getMoveableFeastJulian(year: number, offsetDays: number): Date {
  const pascha = getPaschaJulian(year);
  const result = new Date(pascha);
  result.setUTCDate(result.getUTCDate() + offsetDays);
  return result;
}
