import type { Saint, ScriptureReading, WisdomQuote } from '@/lib/content/types';
import { annunciationFeast } from './saints/annunciation-of-the-theotokos';
import { annunciationScripture } from './scripture/annunciation-luke-1-26-38';
import { annunciationWisdom } from './wisdom/athanasius-on-incarnation-idolatry';
import { sundayOfOrthodoxyFeast } from './saints/sunday-of-orthodoxy';
import { sundayOfOrthodoxyScripture } from './scripture/sunday-of-orthodoxy-john-1-43-51';
import { sundayOfOrthodoxyWisdom } from './wisdom/nicaea-ii-on-icons';


export const allSaints: Saint[] = [annunciationFeast];
export const allScripture: ScriptureReading[] = [annunciationScripture];
export const allWisdom: WisdomQuote[] = [annunciationWisdom];
