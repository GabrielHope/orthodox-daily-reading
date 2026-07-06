import { resolveLiturgicalDay } from './resolveLiturgicalDay';

// Palm Sunday 2027, Old Calendar: displayed date IS the Julian date (April 12)
const oldCalUser = resolveLiturgicalDay(new Date('2027-04-12T00:00:00Z'), 'old');
console.log('Old Calendar user sees:', oldCalUser.moveableFeast, oldCalUser.offsetFromPascha);

// Same Palm Sunday, New Calendar: displayed date is Gregorian (April 12 Julian + 13 = April 25)
const newCalUser = resolveLiturgicalDay(new Date('2027-04-25T00:00:00Z'), 'new');
console.log('New Calendar user sees:', newCalUser.moveableFeast, newCalUser.offsetFromPascha);

// Fixed feast check: Nativity, Old Calendar (Julian Dec 25 shown directly)
const nativityOld = resolveLiturgicalDay(new Date('2026-12-25T00:00:00Z'), 'old');
console.log('Nativity (Old Cal) fixedDateKey:', nativityOld.fixedDateKey);

// Fixed feast check: Nativity, New Calendar (Gregorian Jan 7 shown)
const nativityNew = resolveLiturgicalDay(new Date('2027-01-07T00:00:00Z'), 'new');
console.log('Nativity (New Cal) fixedDateKey:', nativityNew.fixedDateKey);
