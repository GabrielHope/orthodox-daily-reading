import { getDailyContent } from './getDailyContent';

// Old Calendar: Annunciation shown directly as March 25
const oldCal = getDailyContent(new Date('2027-03-25T00:00:00Z'), 'old');
console.log('Old Calendar result:', oldCal.saints[0]?.name, '|', oldCal.scripture[0]?.citation);

// New Calendar: Annunciation shown as April 7 (March 25 + 13 days)
const newCal = getDailyContent(new Date('2027-04-07T00:00:00Z'), 'new');
console.log('New Calendar result:', newCal.saints[0]?.name, '|', newCal.scripture[0]?.citation);

// Sanity check: a random unrelated day should return nothing
const emptyDay = getDailyContent(new Date('2027-06-15T00:00:00Z'), 'old');
console.log('Unrelated day saints found:', emptyDay.saints.length); // should be 0

// Gregory Palamas Sunday 2027: has a saint + scripture, but NO wisdom quote yet
const palamas2027 = getDailyContent(new Date('2027-03-15T00:00:00Z'), 'old');
console.log('Gregory Palamas wisdom (should be null):', palamas2027.wisdom);

// Tuesday of Week 1, Lent, 2027: Clean Monday was March 2 (Julian) = offset -48,
// so Clean Tuesday = offset -47
const week1Tuesday2027 = getDailyContent(new Date('2027-03-03T00:00:00Z'), 'old');
console.log('Week 1 Tuesday scripture count (should be 3 once added):', week1Tuesday2027.scripture.length);
console.log('Week 1 Tuesday saint (should be David of Wales):', week1Tuesday2027.saints[0]?.name);
