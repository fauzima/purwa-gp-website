"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import UpNextCard from "./UpNextCard";

export default function UpNext() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="max-w-screen-2xl mx-auto w-full">
      <div className="flex flex-col">
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="true"
          className="text-4xl md:text-6xl mb-[10vh] px-4 sm:px-8"
        >
          <h1 className="font-semibold text-sky-700 dark:text-slate-100">
            UP NEXT
          </h1>
          <h1 className="font-light dark:text-sky-300">2024 SEASON</h1>
        </div>
        <div
          data-aos="fade-right"
          data-aos-duration="1500"
          data-aos-once="true"
          data-aos-delay="500"
          data-aos-offset="0"
          className="flex flex-wrap content-start gap-x-[24px] gap-y-16 mb-[10vh] lg:mb-[20vh] px-4 sm:px-8"
        >
          <UpNextCard />
          <UpNextCard />
          <UpNextCard />
        </div>
      </div>
    </div>
  );
}
