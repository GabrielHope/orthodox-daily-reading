/**
 * Converts a Gregorian calendar date to the corresponding Julian calendar date.
 * Used to find "Old Calendar" (Julian) feast days from a Gregorian date, or vice versa.
 */

export function gregorianToJulian(gregorianDate: Date): Date {
  const offsetDays = getJulianGregorianOffset(gregorianDate.getUTCFullYear());
  const result = new Date(gregorianDate);
  result.setUTCDate(result.getUTCDate() - offsetDays);
  return result;
}

export function julianToGregorian(julianDate: Date): Date {
  const offsetDays = getJulianGregorianOffset(julianDate.getUTCFullYear());
  const result = new Date(julianDate);
  result.setUTCDate(result.getUTCDate() + offsetDays);
  return result;
}

/**
 * The Julian calendar drifts from the Gregorian calendar by roughly 3 days
 * every 400 years. As of the 20th and 21st centuries (1900–2099), the
 * offset is 13 days. It becomes 14 days starting in March 2100.
 */
function getJulianGregorianOffset(year: number): number {
  if (year >= 1900 && year <= 2099) return 13;
  if (year >= 2100 && year <= 2199) return 14;
  if (year >= 1800 && year <= 1899) return 12;
  throw new Error(`Julian/Gregorian offset not implemented for year ${year}`);
}
