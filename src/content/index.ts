import type { Saint, ScriptureReading, WisdomQuote } from '@/lib/content/types';

// Saints/Feasts
import { annunciationFeast } from './saints/annunciation-of-the-theotokos';
import { sundayOfOrthodoxyFeast } from './saints/sunday-of-orthodoxy';
import { gregoryPalamasFeast } from './saints/sunday-of-gregory-palamas';
import { sundayOfTheCrossFeast } from './saints/sunday-of-the-cross';
import { lazarusSaturday } from './saints/lazarus-saturday';
import { palmSundayFeast } from './saints/palm-sunday';
import { holyThursdayFeast } from './saints/holy-thursday';
import { holySaturdayFeast } from './saints/holy-saturday';
import { holyFridayFeast } from './saints/holy-friday';

// Scripture
import { annunciationScripture } from './scripture/annunciation-luke-1-26-38';
import { sundayOfOrthodoxyScripture } from './scripture/sunday-of-orthodoxy-john-1-43-51';
import { gregoryPalamasScripture } from './scripture/sunday-of-gregory-palamas-mark-2-1-12';
import { sundayOfTheCrossScripture } from './scripture/sunday-of-the-cross-mark-8-34-9-1';
import { lazarusSaturdayScripture } from './scripture/lazarus-saturday-john-11-1-45';
import { palmSundayScripture } from './scripture/palm-sunday-john-12-1-18';
import { holyThursdayScripture } from './scripture/holy-thursday-john-13-1-17';
import { holySaturdayScripture } from './scripture/holy-saturday-matthew-28-1-20';
import { holyFridayScripture } from './scripture/holy-friday-john-19-16-30';

// Wisdom
import { annunciationWisdom } from './wisdom/athanasius-on-incarnation-idolatry';
import { sundayOfOrthodoxyWisdom } from './wisdom/nicaea-ii-on-icons';
import { sundayOfTheCrossWisdom } from './wisdom/chrysostom-power-of-cross';
import { chrysostomOnLazarus } from './wisdom/chrysostom-on-lazarus';
import { palmSundayWisdom } from './wisdom/chrysostom-on-palm-sunday';
import { holyThursdayWisdom } from './wisdom/chrysostom-on-last-supper';
// Note: no wisdom entry exists yet for Gregory Palamas Sunday — intentionally omitted (see prior discussion)

export const allSaints: Saint[] = [
  annunciationFeast,
  sundayOfOrthodoxyFeast,
  gregoryPalamasFeast,
  sundayOfTheCrossFeast,
  lazarusSaturday,
  palmSundayFeast,
  holyThursdayFeast,
];

export const allScripture: ScriptureReading[] = [
  annunciationScripture,
  sundayOfOrthodoxyScripture,
  gregoryPalamasScripture,
  sundayOfTheCrossScripture,
  lazarusSaturdayScripture,
  palmSundayScripture,
  holyThursdayScripture,
];

export const allWisdom: WisdomQuote[] = [
  annunciationWisdom,
  sundayOfOrthodoxyWisdom,
  sundayOfTheCrossWisdom,
  chrysostomOnLazarus,
  palmSundayWisdom,
  holyThursdayWisdom,
];
