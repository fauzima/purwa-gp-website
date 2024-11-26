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
    <div className="flex h-fit flex-col bg-slate-500/25 py-4 lg:w-[calc(50%-20px)]">
      <Image
        className="mt-8"
        priority
        src={`https:${item.fields.circuitLayout.fields.file.url}`}
        width={2048}
        height={2048}
        alt={item.fields.slug}
      />
      <div className="mx-4 mt-8 flex flex-wrap justify-center gap-2 text-base font-medium sm:text-lg lg:text-base xl:text-lg">
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
