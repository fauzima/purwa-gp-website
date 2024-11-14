"use client";
import PW2024 from "@/svg/PW2024";
import LG from "../public/PW2024LG.png";
import SM from "../public/PW2024.png";
import Image from "next/image";
import Aos from "aos";
import { useEffect } from "react";

export default function CarHero() {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex flex-col">
      <div data-aos="zoom-in" data-aos-once="true" className="mx-auto">
        <div className="max-w-full aspect-[8_/_6.5] lg:aspect-[8_/_3.5]">
          <div className="relative mx-auto w-full lg:w-3/4 aspect-[8_/_3] mt-[90px] lg:mt-[60px]">
            <PW2024 className="size-full relative" />
            <Image
              priority
              src={LG}
              alt="LG"
              className="absolute -top-10 hidden lg:block"
            />
            <Image
              priority
              src={SM}
              alt="SM"
              className="absolute top-[5vh] lg:hidden"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="max-w-screen-2xl px-4 sm:px-8 mt-10 mb-[10vh] mx-auto text-center"
      >
        <h1 className="mx-autp text-4xl md:text-6xl font-light mb-5 md:mb-[5vh] dark:text-sky-300">
          OUR 2024 CAR
        </h1>
        <h1 className="text-2xl md:text-4xl font-semibold text-sky-700 dark:text-slate-100 flex flex-wrap justify-center gap-2 lg:gap-3">
          <p>900 BHP |</p>
          <p>1.6L V6 TURBO |</p>
          <p>798 KG |</p>
          <p>8 GEARS</p>
        </h1>
      </div>
    </div>
  );
}
