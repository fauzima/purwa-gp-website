"use client";

export default function TimeZone(date: { date: string }) {
  const now: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return <time>{now}</time>;
}
