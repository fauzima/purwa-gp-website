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
    <div className="flex flex-col bg-slate-500/25 py-4 lg:w-[calc(50%-20px)] h-fit">
      <Image
        className="mt-8"
        priority
        src={`https:${item.fields.circuitLayout.fields.file.url}`}
        width={2048}
        height={2048}
        alt={item.fields.slug}
      />
      <div className="mt-8 mx-4 flex flex-wrap justify-center font-medium text-base sm:text-lg lg:text-base xl:text-lg gap-2">
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
