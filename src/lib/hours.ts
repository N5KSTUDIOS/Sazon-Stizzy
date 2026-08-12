import { hours, type DayHours } from "./site-data";

const TZ = "America/New_York";

const WEEKDAY_INDEX: Record<string, number> = {
  Sun: 0,
  Mon: 1,
  Tue: 2,
  Wed: 3,
  Thu: 4,
  Fri: 5,
  Sat: 6,
};

/**
 * "What time is it at the restaurant?" — independent of the visitor's own
 * timezone, so someone ordering from a phone set to another timezone still
 * sees the truth.
 */
export function nowInNYC(date = new Date()): { day: number; minutes: number } {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: TZ,
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  const get = (type: Intl.DateTimeFormatPartTypes) =>
    parts.find((p) => p.type === type)?.value ?? "";

  const day = WEEKDAY_INDEX[get("weekday")] ?? 0;
  // Some runtimes render midnight as "24" with hour12: false.
  const hour = Number(get("hour")) % 24;
  const minute = Number(get("minute"));

  return { day, minutes: hour * 60 + minute };
}

/** 570 -> "9am", 1230 -> "8:30pm" */
export function formatTime(minutes: number): string {
  const h24 = Math.floor(minutes / 60);
  const m = minutes % 60;
  const suffix = h24 >= 12 ? "pm" : "am";
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return m === 0 ? `${h12}${suffix}` : `${h12}:${String(m).padStart(2, "0")}${suffix}`;
}

export function formatRange(day: DayHours): string {
  if (!day) return "Closed";
  return `${formatTime(day.open)} – ${formatTime(day.close)}`;
}

export type OpenStatus = {
  isOpen: boolean;
  /** True in the last hour of service. */
  closingSoon: boolean;
  /** e.g. "Open until 10pm" / "Closed · opens Sat at 2pm" */
  label: string;
  todayIndex: number;
};

export function getOpenStatus(date = new Date()): OpenStatus {
  const { day, minutes } = nowInNYC(date);
  const today = hours[day].hours;

  if (today && minutes >= today.open && minutes < today.close) {
    return {
      isOpen: true,
      closingSoon: today.close - minutes <= 60,
      label: `Open until ${formatTime(today.close)}`,
      todayIndex: day,
    };
  }

  // Not open right now — find the next time the doors open.
  if (today && minutes < today.open) {
    return {
      isOpen: false,
      closingSoon: false,
      label: `Closed · opens today at ${formatTime(today.open)}`,
      todayIndex: day,
    };
  }

  for (let offset = 1; offset <= 7; offset++) {
    const next = hours[(day + offset) % 7];
    if (next.hours) {
      const when = offset === 1 ? "tomorrow" : next.short;
      return {
        isOpen: false,
        closingSoon: false,
        label: `Closed · opens ${when} at ${formatTime(next.hours.open)}`,
        todayIndex: day,
      };
    }
  }

  return { isOpen: false, closingSoon: false, label: "Closed", todayIndex: day };
}
