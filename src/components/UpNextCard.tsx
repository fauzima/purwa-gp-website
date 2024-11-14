import { getGP } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import Image from "next/image";
import Link from "next/link";
import dateFormat from "dateformat";

export default async function UpNextCard() {
  const origin: IGP[] = await getGP();
  const now: Date = new Date();
  const data: IGP[] = origin.filter((item) => {
    if (new Date(item.fields.raceEnd) > now) return item;
  });
  return (
    <div className="flex flex-wrap content-start gap-x-[24px] gap-y-16 px-4 sm:px-8">
      {data.map((item, idx) => {
        const fp1Start: Date = new Date(item.fields.fp1Start);
        const raceStart: Date = new Date(item.fields.raceStart);
        return (
          <Link
            href={`/race/2024/${item.fields.slug}`}
            key={idx}
            className="flex flex-col text-2xl w-full md:w-[calc(50%-12px)] xl:w-[calc(33.33%-16px)]"
          >
            <div className="w-full aspect-square bg-slate-100 dark:bg-black overflow-hidden brightness-75 hover:brightness-100 transition ease-in-out duration-300">
              <Image
                className="h-full w-full object-cover object-center hover:scale-110 transition-transform ease-in-out"
                src={`https:${item.fields.thumbnail.fields.file.url}`}
                width={1024}
                height={1024}
                alt="Thumbnail"
              />
            </div>
            <div className="mt-3">
              <h2 className="font-semibold text-sky-700 dark:text-slate-100">
                {item.fields.title}
              </h2>
              <h2 className="dark:text-sky-300">
                {fp1Start.getMonth() == raceStart.getMonth()
                  ? `${dateFormat(fp1Start, "d")} — ${dateFormat(raceStart, "d mmm")}`
                  : `${dateFormat(fp1Start, "d mmm")} — ${dateFormat(raceStart, "d mmm")}`}
              </h2>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
