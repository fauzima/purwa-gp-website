"use client";

export default function TimeZone() {
  const now: string = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return <time>{now}</time>;
}
