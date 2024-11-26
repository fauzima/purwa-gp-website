"use client";
import dateFormat from "dateformat";

export default function LocalTime({
  start,
  end,
}: {
  start: string;
  end: string;
}) {
  return (
    <div>
      {dateFormat(start, "HH:MM")} — {dateFormat(end, "HH:MM")}
    </div>
  );
}
