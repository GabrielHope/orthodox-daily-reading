import type { Saint, ScriptureReading, WisdomQuote } from '@/lib/content/types';

// Saints/Feasts
import { annunciationFeast } from './saints/annunciation-of-the-theotokos';
import { sundayOfOrthodoxyFeast } from './saints/sunday-of-orthodoxy';
import { gregoryPalamasFeast } from './saints/sunday-of-gregory-palamas';
import { sundayOfTheCrossFeast } from './saints/sunday-of-the-cross';
import { lazarusSaturday } from './saints/lazarus-saturday';
import { palmSundayFeast } from './saints/palm-sunday';
import { holyThursdayFeast } from './saints/holy-thursday';
import { holyFridayFeast } from './saints/holy-friday';
import { holySaturdayFeast } from './saints/holy-saturday';
import { paschaFeast } from './saints/pascha';
import { davidOfWales } from './saints/david-of-wales';
import { adrianOfPoshekhonye } from './saints/adrian-of-poshekhonye';
import { fortyTwoMartyrsOfAmorium } from './saints/forty-two-martyrs-of-amorium';
import { jamesTheFaster } from './saints/james-the-faster';
import { theodoreTyroSaturday } from './saints/theodore-tyro-saturday';
import { cleanMonday } from './saints/clean-monday';

// Scripture
import { annunciationScripture } from './scripture/annunciation-luke-1-26-38';
import { sundayOfOrthodoxyScripture } from './scripture/sunday-of-orthodoxy-john-1-43-51';
import { gregoryPalamasScripture } from './scripture/sunday-of-gregory-palamas-mark-2-1-12';
import { sundayOfTheCrossScripture } from './scripture/sunday-of-the-cross-mark-8-34-9-1';
import { lazarusSaturdayScripture } from './scripture/lazarus-saturday-john-11-1-45';
import { palmSundayScripture } from './scripture/palm-sunday-john-12-1-18';
import { holyThursdayScripture } from './scripture/holy-thursday-john-13-1-17';
import { holyFridayScripture } from './scripture/holy-friday-john-19-16-30';
import { holySaturdayScripture } from './scripture/holy-saturday-matthew-28-1-20';
import { paschaScripture } from './scripture/pascha-john-1-1-17';
import { week1TuesdayIsaiah } from './scripture/week1-tuesday-isaiah';
import { week1TuesdayGenesis } from './scripture/week1-tuesday-genesis';
import { week1TuesdayProverbs } from './scripture/week1-tuesday-proverbs';
import { week1WednesdayGenesis } from './scripture/week1-wednesday-genesis';
import { week1WednesdayIsaiah } from './scripture/week1-wednesday-isaiah';
import { week1WednesdayProverbs } from './scripture/week1-wednesday-proverbs';
import { week1ThursdayGenesis } from './scripture/week1-thursday-genesis'; 
import { week1ThursdayIsaiah } from './scripture/week1-thursday-isaiah'; 
import { week1ThursdayProverbs } from './scripture/week1-thursday-proverbs';
import { week1FridayGenesis } from './scripture/week1-friday-genesis';
import { week1FridayIsaiah } from './scripture/week1-friday-isaiah';
import { week1FridayProverbs } from './scripture/week1-friday-proverbs';
import { theodoreTyroHebrewsMark } from './scripture/theodore-tyro-hebrews-mark';
import { week1MondayGenesis } from './scripture/week1-monday-genesis';
import { week1MondayIsaiah } from './scripture/week1-monday-isaiah';
import { week1MondayProverbs } from './scripture/week1-monday-proverbs';

// Wisdom
import { annunciationWisdom } from './wisdom/athanasius-on-incarnation-idolatry';
import { sundayOfOrthodoxyWisdom } from './wisdom/nicaea-ii-on-icons';
import { sundayOfTheCrossWisdom } from './wisdom/chrysostom-power-of-cross';
import { chrysostomOnLazarus } from './wisdom/chrysostom-on-lazarus';
import { palmSundayWisdom } from './wisdom/chrysostom-on-palm-sunday';
import { holyThursdayWisdom } from './wisdom/chrysostom-on-last-supper';

export const allSaints: Saint[] = [
  annunciationFeast,
  sundayOfOrthodoxyFeast,
  gregoryPalamasFeast,
  sundayOfTheCrossFeast,
  lazarusSaturday,
  palmSundayFeast,
  holyThursdayFeast,
  holyFridayFeast,
  holySaturdayFeast,
  paschaFeast,
  davidOfWales,
  adrianOfPoshekhonye,
  fortyTwoMartyrsOfAmorium,
  cleanMonday,
];

export const allScripture: ScriptureReading[] = [
  annunciationScripture,
  sundayOfOrthodoxyScripture,
  gregoryPalamasScripture,
  sundayOfTheCrossScripture,
  lazarusSaturdayScripture,
  palmSundayScripture,
  holyThursdayScripture,
  holyFridayScripture,
  holySaturdayScripture,
  paschaScripture,
  week1MondayGenesis,
  week1MondayIsaiah,
  week1MondayProverbs,
  week1TuesdayIsaiah,
  week1TuesdayGenesis,
  week1TuesdayProverbs,
  week1WednesdayIsaiah,
  week1WednesdayGenesis,
  week1WednesdayProverbs,
  week1ThursdayIsaiah,
  week1ThursdayGenesis,
  week1ThursdayProverbs,
  week1FridayIsaiah,
  week1FridayGenesis,
  week1FridayProverbs,
];

export const allWisdom: WisdomQuote[] = [
  annunciationWisdom,
  sundayOfOrthodoxyWisdom,
  sundayOfTheCrossWisdom,
  chrysostomOnLazarus,
  palmSundayWisdom,
  holyThursdayWisdom,
];
