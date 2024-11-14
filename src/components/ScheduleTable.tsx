import { getGPSlug } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import LocalTime from "./localTime";
import LocalDate from "./localDate";

export default async function ScheduleTable({
  params,
}: {
  params: { slug: string };
}) {
  const item: IGP = await getGPSlug(params.slug);
  const fp1Start: string = item.fields.fp1Start;
  const fp1End: string = item.fields.fp1End;
  const fp2Start: string = item.fields.fp2Start;
  const fp2End: string = item.fields.fp2End;
  const fp3Start: string = item.fields.fp3Start;
  const fp3End: string = item.fields.fp3End;
  const qualiStart: string = item.fields.qualiStart;
  const qualiEnd: string = item.fields.qualiEnd;
  const raceStart: string = item.fields.raceStart;
  const raceEnd: string = item.fields.raceEnd;
  return (
    <table className="lg:h-1/2 text-sm">
      <tr className="border border-slate-500">
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] font-semibold">FP1</td>
        <td className=" w-[33.33%] text-center">
          <LocalDate date={fp1Start} />
        </td>
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] text-end font-semibold">
          <LocalTime start={fp1Start} end={fp1End} />
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] font-semibold">FP2</td>
        <td className=" w-[33.33%] text-center">
          <LocalDate date={fp2Start} />
        </td>
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] text-end font-semibold">
          <LocalTime start={fp2Start} end={fp2End} />
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] font-semibold">FP3</td>
        <td className=" w-[33.33%] text-center">
          <LocalDate date={fp3Start} />
        </td>
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] text-end font-semibold">
          <LocalTime start={fp3Start} end={fp3End} />
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] font-semibold">Qualifying</td>
        <td className=" w-[33.33%] text-center">
          <LocalDate date={qualiStart} />
        </td>
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] text-end font-semibold">
          <LocalTime start={qualiStart} end={qualiEnd} />
        </td>
      </tr>
      <tr className="border border-slate-500">
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] font-semibold">Race</td>
        <td className=" w-[33.33%] text-center">
          <LocalDate date={raceStart} />
        </td>
        <td className="px-[6px] py-5 sm:p-5 w-[33.33%] text-end font-semibold">
          <LocalTime start={raceStart} end={raceEnd} />
        </td>
      </tr>
    </table>
  );
}
