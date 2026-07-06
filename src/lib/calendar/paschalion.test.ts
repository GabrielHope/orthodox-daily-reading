import { getPaschaJulian, getPaschaGregorian, getMoveableFeastJulian } from './paschalion';

// You calculated this by hand: Pascha 2027 = April 19 Julian / May 2 Gregorian
console.log('Pascha 2027 (Julian):', getPaschaJulian(2027).toISOString());
console.log('Pascha 2027 (Gregorian):', getPaschaGregorian(2027).toISOString());

// Sanity check a couple more known years
console.log('Pascha 2025 (Gregorian):', getPaschaGregorian(2025).toISOString());
console.log('Pascha 2026 (Gregorian):', getPaschaGregorian(2026).toISOString());

// Palm Sunday = Pascha - 7 days
console.log('Palm Sunday 2027 (Julian):', getMoveableFeastJulian(2027, -7).toISOString());
