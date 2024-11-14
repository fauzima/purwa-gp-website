import { getGP, getGPSlug } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";
import ScheduleTable from "@/components/ScheduleTable";
import dateFormat from "dateformat";
import TrackDetail from "@/components/TrackDetail";

export const generateStaticParams = async () => {
  const GPs: IGP[] = await getGP();
  return GPs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export default async function GrandPrixPage({
  params,
}: {
  params: { slug: string };
}) {
  const item: IGP = await getGPSlug(params.slug);
  const now: Date = new Date();
  return (
    <div className="flex flex-col mt-[60px]">
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        className="flex flex-col lg:flex-row-reverse mb-[10vh] lg:mb-[20vh]"
      >
        <div className="w-full lg:w-1/2 lg:max-h-[80vh] aspect-[4_/_3] sm:aspect-video lg:aspect-square bg-slate-100 dark:bg-black overflow-hidden">
          <Image
            className="h-full w-full object-cover object-[30%] sm:object-center lg:object-[30%]"
            priority
            src={`https:${item.fields.thumbnail.fields.file.url}`}
            width={2048}
            height={2048}
            alt={item.fields.slug}
          />
        </div>
        <div className="relative w-full max-w-[80vh] lg:w-1/2 sm:max-h-[80vh] aspect-video lg:aspect-square px-4 sm:px-8 py-8 text-4xl sm:text-6xl lg:content-center">
          <h1 className="font-semibold mb-2 lg:mb-4 text-sky-700 dark:text-slate-100">
            {item.fields.title}
          </h1>
          <h1 className="font-light mb-2 lg:mb-4 dark:text-sky-300">
            ROUND {item.fields.round}
          </h1>
          <IoMdArrowDown className="sm:absolute sm:bottom-0 text-8xl sm:text-[150px] text-teal-500" />
        </div>
      </div>
      <div className="max-w-screen-2xl mx-auto w-full px-4 sm:px-8 flex flex-col mb-[10vh]">
        <div className="flex flex-col gap-2 text-4xl mb-[5vh]">
          <h1 className="font-semibold text-sky-700 dark:text-slate-100">
            RACE WEEKEND
          </h1>
          <h1 className="font-light dark:text-sky-300">DETAILS</h1>
          <h2 className="text-xl">
            Your Local Time (GMT{dateFormat(now, "p")})
          </h2>
        </div>
        <div className="flex flex-col lg:flex-row-reverse gap-6">
          <ScheduleTable params={params} />
          <TrackDetail params={params} />
        </div>
      </div>
    </div>
  );
}
