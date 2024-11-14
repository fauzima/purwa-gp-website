"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Image from "next/image";
import Driver from "../public/Driver.png";
import DriverFlipped from "../public/DriverFlipped.png";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function HomeDrivers() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto w-full mb-[15vh] lg:mb-[20vh] px-4 sm:px-8 flex flex-col text-4xl md:text-6xl">
      <div data-aos="fade-right" data-aos-once="true" className="mb-[10vh]">
        <h1 className="font-semibold mb-2 lg:mb-4 text-sky-700 dark:text-slate-100">
          OUR 2024
        </h1>
        <h1 className="font-light dark:text-sky-300">F1 DRIVER LINE-UP</h1>
      </div>
      <div className="flex flex-col md:flex-row gap-5">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="group relative w-full aspect-[3_/_4] bg-teal-500/75 hover:bg-teal-500 overflow-hidden transition ease-in-out duration-300 text-slate-100"
        >
          <Image
            className="h-full w-full object-cover object-center group-hover:scale-105 transition ease-in-out brightness-90 group-hover:brightness-100"
            src={Driver}
            alt="Driver"
          />
          <div className="px-5 py-3 absolute bottom-0 left-0 font-semibold">
            DRIVER 1
          </div>
        </div>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="group relative w-full aspect-[3_/_4] bg-sky-500/75 hover:bg-sky-500 overflow-hidden transition ease-in-out duration-300 text-slate-100"
        >
          <Image
            className="h-full w-full object-cover object-center group-hover:scale-105 transition ease-in-out brightness-90 group-hover:brightness-100"
            src={DriverFlipped}
            alt="Driver"
          />
          <div className="px-5 py-3 absolute bottom-0 left-0 font-semibold">
            DRIVER 2
          </div>
        </div>
      </div>
      <Link
        data-aos="fade-right"
        data-aos-once="true"
        href={"/team"}
        className="flex w-fit mt-10 mx-auto p-5 h-9 items-center text-base text-slate-100 rounded ring-1 shadow shadow-indigo-200 ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:bg-indigo-500 bg-sky-500 transition ease-in-out"
      >
        <h3>Meet the full team</h3>
        <FaArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}
