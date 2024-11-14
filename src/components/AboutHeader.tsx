import Image from "next/image";
import Trophies from "../public/Trophies.jpg";

export default function AboutHeader() {
  return (
    <div className="flex flex-col text-slate-700 dark:text-slate-300 text-xl mb-[10vh]">
      <div className="h-[40vh] w-full bg-slate-100 dark:bg-black overflow-hidden mb-[5vh]">
        <Image
          src={Trophies}
          priority
          alt="Trophies"
          className="h-full w-full object-cover object-center"
        />
      </div>
      <div className="max-w-screen-xl mx-auto w-full px-4 sm:px-8">
        <h1 className="text-4xl sm:text-6xl font-light mb-[5vh] dark:text-sky-300">
          PURWA GP FORMULA 1 HERITAGE
        </h1>
        <div>
          <p className="mb-[10vh]">
            Purwa GP’s is a story of restless technical development,
            characterised by gritty stories of heroism and human endeavour.
            Established in 1987, Purwa GP’s great champions are all individuals
            who have stood on the sport’s global stage and told their own
            unique, timeless tale. These, then, are the stories we continue to
            tell along our journey.
          </p>
          <ul className="flex flex-col gap-2">
            <li>88 Grand Prix Wins</li>
            <li>211 Podiums</li>
            <li>83 Pole Positions</li>
            <li>5 Drivers’ Championships</li>
            <li>3 Constructors’ Championships</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
