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
      className="flex flex-col lg:flex-row-reverse mb-[10vh] lg:mb-[20vh]"
    >
      <div className="w-full lg:w-1/2 lg:max-h-[80vh] aspect-[4_/_3] sm:aspect-video lg:aspect-square bg-slate-100 dark:bg-black overflow-hidden">
        <Image
          className="h-full w-full object-cover object-[30%] sm:object-center lg:object-[30%]"
          priority
          src={Hero}
          alt="Hero"
        />
      </div>
      <div className="relative w-full max-w-[80vh] lg:w-1/2 sm:max-h-[80vh] aspect-video lg:aspect-square px-4 sm:px-8 py-8 text-4xl sm:text-6xl lg:content-center">
        <h1 className="font-semibold mb-2 lg:mb-4 text-sky-700 dark:text-slate-100">
          HOME OF THE
        </h1>
        <h1 className="font-light mb-2 lg:mb-4 dark:text-sky-300">
          PURWA GP FORMULA 1 TEAM
        </h1>
        <IoMdArrowDown className="sm:absolute sm:bottom-0 text-8xl sm:text-[150px] text-teal-500" />
      </div>
    </div>
  );
}
