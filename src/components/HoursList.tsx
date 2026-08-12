"use client";

import { useEffect, useState } from "react";
import { hours } from "@/lib/site-data";
import { formatRange, nowInNYC } from "@/lib/hours";

/** The week's hours, with today called out. */
export default function HoursList() {
  const [today, setToday] = useState<number | null>(null);

  useEffect(() => {
    setToday(nowInNYC().day);
  }, []);

  return (
    <ul className="divide-y divide-carbon/10">
      {hours.map((day, i) => {
        const isToday = today === i;
        return (
          <li
            key={day.label}
            className={`flex items-baseline justify-between gap-4 py-3 ${
              isToday ? "font-bold" : ""
            }`}
          >
            <span className="flex items-center gap-2">
              {day.label}
              {isToday && (
                <span className="rounded-full bg-pink px-2 py-0.5 text-[0.65rem] font-bold tracking-wider text-carbon uppercase">
                  Today
                </span>
              )}
            </span>
            <span
              className={`shrink-0 tabular-nums ${
                isToday ? "text-carbon" : "text-carbon/65"
              }`}
            >
              {formatRange(day.hours)}
            </span>
          </li>
        );
      })}
    </ul>
  );
}
