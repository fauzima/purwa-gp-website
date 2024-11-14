import { getGPSlug } from "@/libs/grandPrix";
import { IGP } from "@/types/grandPrix";
import Image from "next/image";

export default async function TrackDetail({
  params,
}: {
  params: { slug: string };
}) {
  const item: IGP = await getGPSlug(params.slug);
  return (
    <div className="flex flex-col bg-slate-200 dark:bg-slate-500/50 p-4 rounded-md lg:w-[calc(50%-12px)] xl:w-[calc(60%-12px)]">
      <Image
        className="mt-9"
        priority
        src={`https:${item.fields.circuitLayout.fields.file.url}`}
        width={2048}
        height={2048}
        alt={item.fields.slug}
      />
      <div className="pt-8 flex flex-wrap justify-center text-base sm:text-lg lg:text-base xl:text-lg gap-2">
        <p>First GP: {item.fields.firstGp} |</p>
        <p>Laps: {item.fields.laps} |</p>
        <p>Circuit Length: {item.fields.circuitLength.toFixed(3)} km |</p>
        <p>
          Circuit Distance:{" "}
          {(item.fields.laps * item.fields.circuitLength).toFixed(3)} km
        </p>
      </div>
    </div>
  );
}
