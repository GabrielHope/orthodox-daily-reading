import { gregorianToJulian, julianToGregorian } from './julian';

// Known fact: Julian Christmas (Dec 25 Julian) falls on Jan 7 Gregorian, in this era.
const janSeventh = new Date('2026-01-07T00:00:00Z');
console.log('Gregorian Jan 7 → Julian:', gregorianToJulian(janSeventh).toISOString());
// Should print December 25 of the prior year

const dec25 = new Date('2025-12-25T00:00:00Z');
console.log('Julian Dec 25 → Gregorian:', julianToGregorian(dec25).toISOString());
// Should print January 7, 2026
