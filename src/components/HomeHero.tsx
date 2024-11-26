"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Image from "next/image";
import { useEffect } from "react";
import { IoMdArrowDown } from "react-icons/io";
import Hero from "../public/1.png";

export default function HomeHero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="zoom-in"
      data-aos-once="true"
      className="mb-[15vh] flex flex-col lg:mb-[20vh] lg:flex-row-reverse"
    >
      <div className="aspect-[4_/_3] w-full overflow-hidden bg-slate-100 dark:bg-black sm:aspect-video lg:aspect-square lg:max-h-[80vh] lg:w-1/2">
        <Image
          className="h-full w-full object-cover object-[30%] sm:object-center lg:object-[30%]"
          priority
          src={Hero}
          alt="Hero"
        />
      </div>
      <div className="relative aspect-video w-full max-w-[80vh] px-4 py-8 text-4xl sm:max-h-[80vh] sm:px-8 sm:text-6xl lg:aspect-square lg:w-1/2 lg:content-center">
        <h1 className="mb-2 font-semibold text-sky-700 dark:text-slate-100 lg:mb-4">
          HOME OF THE
        </h1>
        <h1 className="mb-2 font-light dark:text-sky-300 lg:mb-4">
          PURWA GP FORMULA 1 TEAM
        </h1>
        <IoMdArrowDown className="text-8xl text-teal-500 sm:absolute sm:bottom-0 sm:text-[150px]" />
      </div>
    </div>
  );
}
