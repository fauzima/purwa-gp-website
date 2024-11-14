import { getGPSlug } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import dateFormat from "dateformat";

export default async function ScheduleTable({
  params,
}: {
  params: { slug: string };
}) {
  const item: IGP = await getGPSlug(params.slug);
  const fp1Start: Date = new Date(item.fields.fp1Start);
  const fp1End: Date = new Date(item.fields.fp1End);
  const fp2Start: Date = new Date(item.fields.fp2Start);
  const fp2End: Date = new Date(item.fields.fp2End);
  const fp3Start: Date = new Date(item.fields.fp3Start);
  const fp3End: Date = new Date(item.fields.fp3End);
  const qualiStart: Date = new Date(item.fields.qualiStart);
  const qualiEnd: Date = new Date(item.fields.qualiEnd);
  const raceStart: Date = new Date(item.fields.raceStart);
  const raceEnd: Date = new Date(item.fields.raceEnd);
  return (
    <table className="mb-[5vh] lg:w-[calc(50%-12px)] lg:h-1/2 text-sm xl:w-[calc(40%-12px)]">
      <tr className="border border-slate-500">
        <td className="p-5 w-[33.33%] font-semibold">FP1</td>
        <td className=" w-[33.33%] text-center">
          {dateFormat(fp1Start, "ddd d mmm")}
        </td>
        <td className="p-5 w-[33.33%] text-end font-semibold">
          {dateFormat(fp1Start, "HH:MM")} — {dateFormat(fp1End, "HH:MM")}
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="p-5 w-[33.33%] font-semibold">FP2</td>
        <td className=" w-[33.33%] text-center">
          {dateFormat(fp2Start, "ddd d mmm")}
        </td>
        <td className="p-5 w-[33.33%] text-end font-semibold">
          {dateFormat(fp2Start, "HH:MM")} — {dateFormat(fp2End, "HH:MM")}
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="p-5 w-[33.33%] font-semibold">FP3</td>
        <td className=" w-[33.33%] text-center">
          {dateFormat(fp3Start, "ddd d mmm")}
        </td>
        <td className="p-5 w-[33.33%] text-end font-semibold">
          {dateFormat(fp3Start, "HH:MM")} — {dateFormat(fp3End, "HH:MM")}
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="p-5 w-[33.33%] font-semibold">Qualifying</td>
        <td className=" w-[33.33%] text-center">
          {dateFormat(qualiStart, "ddd d mmm")}
        </td>
        <td className="p-5 w-[33.33%] text-end font-semibold">
          {dateFormat(qualiStart, "HH:MM")} — {dateFormat(qualiEnd, "HH:MM")}
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="p-5 w-[33.33%] font-semibold">Race</td>
        <td className=" w-[33.33%] text-center">
          {dateFormat(raceStart, "ddd d mmm")}
        </td>
        <td className="p-5 w-[33.33%] text-end font-semibold">
          {dateFormat(raceStart, "HH:MM")} — {dateFormat(raceEnd, "HH:MM")}
        </td>
      </tr>
    </table>
  );
}
