import Image from "next/image";
import Card from "../public/7.jpg";

export default function UpNextCard() {
  return (
    <div className="flex flex-col text-2xl w-full md:w-[calc(50%-12px)] xl:w-[calc(33.33%-16px)]">
      <div className="w-full aspect-square bg-slate-100 dark:bg-black overflow-hidden brightness-[.67] hover:brightness-100 transition ease-in-out duration-300">
        <Image
          className="h-full w-full object-cover object-center hover:scale-110 transition-transform ease-in-out"
          src={Card}
          alt="Hero"
        />
      </div>
      <div className="mt-3">
        <h2 className="font-semibold text-sky-700 dark:text-slate-100">
          XX — XX MONTH
        </h2>
        <h2 className="dark:text-sky-300">Grand Prix</h2>
      </div>
    </div>
  );
}
