import { resolveLiturgicalDay, type CalendarMode } from '@/lib/calendar/resolveLiturgicalDay';
import { allSaints, allScripture, allWisdom } from '@/content';
import { WEEKDAY_THEMES, type WeekdayTheme } from '@/content/weekdayThemes';
import { julianToGregorian } from '@/lib/calendar/julian';


export interface DailyContent {
  date: Date;
  calendarMode: CalendarMode;
  headlineSaints: typeof allSaints;
  allSaintsToday: typeof allSaints;
  coreScripture: typeof allScripture;
  allScriptureToday: typeof allScripture;
  wisdom: typeof allWisdom[number] | null;
  weekdayTheme: WeekdayTheme;
}

export function getDailyContent(date: Date, calendarMode: CalendarMode): DailyContent {
  const resolved = resolveLiturgicalDay(date, calendarMode);

  const matchesDay = (item: { fixedDateKey?: string; moveableFeast?: string; paschaOffset?: number }) =>
    item.fixedDateKey === resolved.fixedDateKey ||
    item.moveableFeast === resolved.moveableFeast ||
    item.paschaOffset === resolved.offsetFromPascha;

  const allSaintsToday = allSaints.filter(matchesDay);
  const headlineSaints = allSaintsToday.filter((s) => s.tier === 'headline');

  const allScriptureToday = allScripture.filter(matchesDay);
  const coreScripture = allScriptureToday.filter((s) => s.tier === 'core');

  const wisdom = allWisdom.find(matchesDay) ?? null;
  const dayOfWeek = julianToGregorian(resolved.julianDate).getUTCDay();
  const weekdayTheme = WEEKDAY_THEMES[dayOfWeek];

  return { date, calendarMode, headlineSaints, allSaintsToday, coreScripture, allScriptureToday, wisdom, weekdayTheme };
}
