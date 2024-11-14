"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Driver from "../public/Driver.png";

export default function TeamDrivers() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto w-full mb-[10vh] lg:mb-[20vh] px-4 sm:px-8 flex flex-col text-4xl md:text-6xl">
      <div data-aos="fade-right" data-aos-once="true" className="mb-[5vh]">
        <h1 className="font-light dark:text-sky-300">DRIVERS</h1>
      </div>
      <div
        data-aos="fade-right"
        data-aos-once="true"
        className="flex flex-col md:flex-row gap-5"
      >
        <div className="group relative w-full aspect-[3_/_4] bg-teal-500/75 hover:bg-teal-500 overflow-hidden transition ease-in-out duration-300 text-slate-100">
          <Image
            className="h-full w-full object-cover object-center group-hover:scale-105 transition ease-in-out brightness-90 group-hover:brightness-100"
            src={Driver}
            alt="Driver"
          />
          <div className="px-5 py-3 absolute bottom-0 left-0 font-semibold">
            DRIVER 1
          </div>
        </div>
        <div className="group relative w-full aspect-[3_/_4] bg-sky-500/75 hover:bg-sky-500 overflow-hidden transition ease-in-out duration-300 scale-x-[-1] text-slate-100">
          <Image
            className="h-full w-full object-cover object-center group-hover:scale-105 transition ease-in-out brightness-90 group-hover:brightness-100"
            src={Driver}
            alt="Driver"
          />
          <div className="px-5 py-3 absolute bottom-0 right-0 font-semibold scale-x-[-1]">
            DRIVER 2
          </div>
        </div>
      </div>
    </div>
  );
}
