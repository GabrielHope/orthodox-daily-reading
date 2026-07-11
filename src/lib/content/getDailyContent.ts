import { resolveLiturgicalDay, type CalendarMode } from '@/lib/calendar/resolveLiturgicalDay';
import { allSaints, allScripture, allWisdom } from '@/content';
import { WEEKDAY_THEMES, type WeekdayTheme } from '@/content/weekdayThemes';

export interface DailyContent {
  date: Date;
  calendarMode: CalendarMode;
  saints: typeof allSaints;
  scripture: typeof allScripture;
  wisdom: typeof allWisdom[number] | null;
  weekdayTheme: WeekdayTheme;
}

export function getDailyContent(date: Date, calendarMode: CalendarMode): DailyContent {
  const resolved = resolveLiturgicalDay(date, calendarMode);

  const saints = allSaints.filter(
    (s) =>
      s.fixedDateKey === resolved.fixedDateKey ||
      s.moveableFeast === resolved.moveableFeast ||
      s.paschaOffset === resolved.offsetFromPascha
  );
  const scripture = allScripture.filter(
    (s) =>
      s.fixedDateKey === resolved.fixedDateKey ||
      s.moveableFeast === resolved.moveableFeast ||
      s.paschaOffset === resolved.offsetFromPascha
  );
  const wisdom = allWisdom.find(
    (w) =>
      w.fixedDateKey === resolved.fixedDateKey ||
      w.moveableFeast === resolved.moveableFeast ||
      w.paschaOffset === resolved.offsetFromPascha
  ) ?? null;

  const dayOfWeek = resolved.julianDate.getUTCDay();
  const weekdayTheme = WEEKDAY_THEMES[dayOfWeek];

  return { date, calendarMode, saints, scripture, wisdom, weekdayTheme };
}
