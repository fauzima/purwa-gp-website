import { getGP, getGPSlug } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import Image from "next/image";
import { IoMdArrowDown } from "react-icons/io";
import ScheduleTable from "@/components/ScheduleTable";
import TrackDetail from "@/components/TrackDetail";
import TimeZone from "@/components/timeZone";

export const generateStaticParams = async () => {
  const GPs: IGP[] = await getGP();
  return GPs.map((item) => ({
    slug: item.fields.slug,
  }));
};

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}) {
  const data: IGP = await getGPSlug(params.slug);
  return {
    title: data.fields.title,
    describe: `Purwa GP | ${data.fields.title}`,
    openGraph: {
      images: [`https:${data.fields.thumbnail.fields.file.url}`],
    },
  };
}

export default async function GrandPrixPage({
  params,
}: {
  params: { slug: string };
}) {
  const item: IGP = await getGPSlug(params.slug);
  return (
    <div className="mt-[60px] flex flex-col">
      <div
        data-aos="zoom-in"
        data-aos-once="true"
        className="mb-[10vh] flex flex-col lg:mb-[20vh] lg:flex-row-reverse"
      >
        <div className="aspect-[4_/_3] w-full overflow-hidden bg-slate-100 dark:bg-black sm:aspect-video lg:aspect-square lg:max-h-[80vh] lg:w-1/2">
          <Image
            className="h-full w-full object-cover object-[30%] sm:object-center lg:object-[30%]"
            priority
            src={`https:${item.fields.thumbnail.fields.file.url}`}
            width={2048}
            height={2048}
            alt={item.fields.slug}
          />
        </div>
        <div className="relative aspect-video w-full max-w-[80vh] px-4 py-8 text-4xl uppercase sm:max-h-[80vh] sm:px-8 sm:text-6xl lg:aspect-square lg:w-1/2 lg:content-center">
          <h1 className="mb-2 font-semibold text-sky-700 dark:text-slate-100 lg:mb-4">
            {item.fields.title}
          </h1>
          <h1 className="mb-2 font-light dark:text-sky-300 lg:mb-4">
            2024 | ROUND {item.fields.round}
          </h1>
          <IoMdArrowDown className="text-8xl text-teal-500 sm:absolute sm:bottom-0 sm:text-[150px]" />
        </div>
      </div>
      <div className="mx-auto mb-[10vh] flex w-full max-w-screen-2xl flex-col gap-[5vh] px-4 sm:px-8 lg:flex-row lg:items-center lg:gap-10">
        <div className="flex flex-col gap-[5vh] lg:w-[calc(50%-20px)]">
          <div className="flex flex-col gap-2 text-4xl">
            <h1 className="font-semibold text-sky-700 dark:text-slate-100">
              RACE WEEKEND
            </h1>
            <h1 className="font-light dark:text-sky-300">DETAILS</h1>
            <h2 className="text-xl">
              Your Local Time (<TimeZone />)
            </h2>
          </div>
          <ScheduleTable params={params} />
        </div>
        <TrackDetail params={params} />
      </div>
    </div>
  );
}

{
  /* <ScheduleTable params={params} /> */
}
{
  /* <TrackDetail params={params} /> */
}
