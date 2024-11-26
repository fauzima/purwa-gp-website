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
    <div className="mx-auto mb-[15vh] flex w-full max-w-screen-2xl flex-col px-4 text-4xl sm:px-8 md:text-6xl lg:mb-[20vh]">
      <div data-aos="fade-right" data-aos-once="true" className="mb-[10vh]">
        <h1 className="mb-2 font-semibold text-sky-700 dark:text-slate-100 lg:mb-4">
          OUR 2024
        </h1>
        <h1 className="font-light dark:text-sky-300">F1 DRIVER LINE-UP</h1>
      </div>
      <div className="flex flex-col gap-5 md:flex-row">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="group relative aspect-[3_/_4] w-full overflow-hidden bg-teal-500/75 text-slate-100 transition duration-300 ease-in-out hover:bg-teal-500"
        >
          <Image
            className="h-full w-full object-cover object-center brightness-90 transition ease-in-out group-hover:scale-105 group-hover:brightness-100"
            src={Driver}
            alt="Driver"
          />
          <div className="absolute bottom-0 left-0 px-5 py-3 font-semibold">
            DRIVER 1
          </div>
        </div>
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="group relative aspect-[3_/_4] w-full overflow-hidden bg-sky-500/75 text-slate-100 transition duration-300 ease-in-out hover:bg-sky-500"
        >
          <Image
            className="h-full w-full object-cover object-center brightness-90 transition ease-in-out group-hover:scale-105 group-hover:brightness-100"
            src={DriverFlipped}
            alt="Driver"
          />
          <div className="absolute bottom-0 left-0 px-5 py-3 font-semibold">
            DRIVER 2
          </div>
        </div>
      </div>
      <Link
        data-aos="fade-right"
        data-aos-once="true"
        href={"/team"}
        className="mx-auto mt-10 flex h-9 w-fit items-center rounded-sm bg-sky-500 p-5 text-base text-slate-100 shadow shadow-indigo-200 ring-1 ring-slate-900/10 transition ease-in-out hover:bg-indigo-500 dark:shadow-none dark:ring-0 dark:hover:shadow-none"
      >
        <h3>Meet the full team</h3>
        <FaArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
