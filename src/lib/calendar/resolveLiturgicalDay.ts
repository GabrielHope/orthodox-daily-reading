import { getPaschaJulian } from './paschalion';
import { gregorianToJulian } from './julian';
import { FEAST_OFFSETS, FeastOffsetName } from './feastOffsets';

export type CalendarMode = 'old' | 'new';

export interface LiturgicalDayInfo {
  requestedDate: Date;
  calendarMode: CalendarMode;
  julianDate: Date;
  offsetFromPascha: number;
  moveableFeast: FeastOffsetName | null;
  fixedDateKey: string; // e.g. "12-25", Julian month-day, for looking up fixed feasts/saints later
}

/**
 * The single entry point the rest of the app will call: given a date as
 * displayed to the user (in whichever calendar they've selected), resolve
 * everything needed to look up that day's content.
 */
export function resolveLiturgicalDay(
  requestedDate: Date,
  calendarMode: CalendarMode
): LiturgicalDayInfo {
  // All underlying data (Pascha, feast offsets, fixed feast dates) is
  // anchored to the Julian calendar, so convert first if needed.
  const julianDate = calendarMode === 'new' ? gregorianToJulian(requestedDate) : requestedDate;

  const offsetFromPascha = getOffsetFromPascha(julianDate);

  const moveableFeast =
    (Object.entries(FEAST_OFFSETS).find(([, offset]) => offset === offsetFromPascha)?.[0] as
      | FeastOffsetName
      | undefined) ?? null;

  const month = julianDate.getUTCMonth() + 1;
  const day = julianDate.getUTCDate();
  const fixedDateKey = `${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;

  return { requestedDate, calendarMode, julianDate, offsetFromPascha, moveableFeast, fixedDateKey };
}

function getOffsetFromPascha(julianDate: Date): number {
  const year = julianDate.getUTCFullYear();
  const pascha = getPaschaJulian(year);
  const msPerDay = 1000 * 60 * 60 * 24;
  return Math.round((julianDate.getTime() - pascha.getTime()) / msPerDay);
}
