"use client";
import dateFormat from "dateformat";

export default function LocalDate({ date }: { date: string }) {
  return <div>{dateFormat(date, "ddd d mmm")}</div>;
}
