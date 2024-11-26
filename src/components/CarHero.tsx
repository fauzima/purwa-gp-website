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
        <div className="aspect-[8_/_6.5] max-w-full lg:aspect-[8_/_3.5]">
          <div className="relative mx-auto mt-[90px] aspect-[8_/_3] w-full lg:mt-[60px] lg:w-3/4">
            <PW2024 className="relative size-full" />
            <Image
              priority
              src={LG}
              alt="LG"
              className="absolute -top-10 hidden transition-transform hover:scale-110 lg:block"
            />
            <Image
              priority
              src={SM}
              alt="SM"
              className="absolute top-[5vh] transition-transform hover:scale-110 lg:hidden"
            />
          </div>
        </div>
      </div>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="mx-auto mb-[10vh] mt-10 max-w-screen-2xl px-4 text-center sm:px-8"
      >
        <h1 className="mx-auto mb-5 text-4xl font-light dark:text-sky-300 md:mb-[5vh] md:text-6xl">
          OUR 2024 CAR
        </h1>
        <h1 className="flex flex-wrap justify-center gap-2 text-2xl font-semibold text-sky-700 dark:text-slate-100 md:text-4xl lg:gap-3">
          <p>900 BHP |</p>
          <p>1.6L V6 TURBO |</p>
          <p>798 KG |</p>
          <p>8 GEARS</p>
        </h1>
      </div>
    </div>
  );
}
