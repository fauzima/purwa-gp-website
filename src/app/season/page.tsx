import { getGP } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import Image from "next/image";
import dateFormat from "dateformat";
import Link from "next/link";

export default async function SeasonPage() {
  const data: IGP[] = await getGP();
  return (
    <div className="max-w-screen-2xl mx-auto mt-[60px] px-4 sm:px-8 mb-[10vh] flex flex-col">
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="text-4xl md:text-6xl my-[10vh]"
      >
        <h1 className="font-semibold mb-2 lg:mb-4 text-sky-700 dark:text-slate-100">
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
              href={`/race/${item.fields.slug}`}
              key={idx}
              className="flex flex-col text-2xl w-full md:w-[calc(50%-12px)] lg:w-[calc(33.33%-16px)] 2xl:w-[calc(25%-18px)]"
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
    </div>
  );
}
