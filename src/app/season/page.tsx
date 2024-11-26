import { getGP } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import Image from "next/image";
import dateFormat from "dateformat";
import Link from "next/link";

export default async function SeasonPage() {
  const data: IGP[] = await getGP();
  return (
    <div className="mx-auto mb-[10vh] mt-[5vh] flex max-w-screen-2xl flex-col px-4 sm:px-8">
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="my-[10vh] text-4xl md:text-6xl"
      >
        <h1 className="mb-2 font-semibold text-sky-700 dark:text-slate-100 lg:mb-4">
          FORMULA 1 SCHEDULE
        </h1>
        <h1 className="font-light dark:text-sky-300">2024</h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        data-aos-delay="500"
        data-aos-offset="0"
        className="flex flex-wrap content-start gap-x-[24px] gap-y-16"
      >
        {data.map((item, idx) => {
          const fp1Start: Date = new Date(item.fields.fp1Start);
          const raceStart: Date = new Date(item.fields.raceStart);
          return (
            <Link
              href={`/race/2024/${item.fields.slug}`}
              key={idx}
              className="group flex w-full flex-col bg-slate-500/15 text-2xl transition duration-300 ease-in-out hover:bg-slate-500/25 dark:bg-slate-500/25 dark:hover:bg-slate-500/50 md:w-[calc(50%-12px)] xl:w-[calc(33.33%-16px)]"
            >
              <div className="aspect-square w-full overflow-hidden bg-slate-100 brightness-75 transition duration-300 ease-in-out group-hover:brightness-100 dark:bg-black">
                <Image
                  className="h-full w-full object-cover object-center transition-transform ease-in-out group-hover:scale-110"
                  priority
                  src={`https:${item.fields.thumbnail.fields.file.url}`}
                  width={512}
                  height={512}
                  alt="Thumbnail"
                />
              </div>
              <div className="px-4 py-3 uppercase">
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
    </div>
  );
}
