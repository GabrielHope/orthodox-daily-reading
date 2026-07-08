import { resolveLiturgicalDay, type CalendarMode } from '@/lib/calendar/resolveLiturgicalDay';
import { allSaints, allScripture, allWisdom } from '@/content';

export interface DailyContent {
  date: Date;
  calendarMode: CalendarMode;
  saints: typeof allSaints;
  scripture: typeof allScripture;
  wisdom: typeof allWisdom[number] | null;
}

export function getDailyContent(date: Date, calendarMode: CalendarMode): DailyContent {
  const resolved = resolveLiturgicalDay(date, calendarMode);

  const saints = allSaints.filter(
    (s) => s.fixedDateKey === resolved.fixedDateKey || s.moveableFeast === resolved.moveableFeast
  );
  const scripture = allScripture.filter(
    (s) => s.fixedDateKey === resolved.fixedDateKey || s.moveableFeast === resolved.moveableFeast
  );

  const wisdom = allWisdom.find(
    (w) => w.fixedDateKey === resolved.fixedDateKey || w.moveableFeast === resolved.moveableFeast
  ) ?? null;


  return { date, calendarMode, saints, scripture, wisdom };
}
