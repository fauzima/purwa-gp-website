"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function SubHeroHomePage() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-duration="1500"
      data-aos-once="true"
      className="max-w-screen-2xl mx-auto w-full mb-[10vh] lg:mb-[20vh] px-4 sm:px-8 text-xl text-slate-700 dark:text-slate-300"
    >
      <div className="flex flex-col gap-10 x">
        <p className="font-semibold">
          Step into a world of exhilaration with Purwa GP...
        </p>
        <p className="">
          After our first taste of victory in F1 at the 1990 Belgian Grand Prix,
          Purwa GP has gone on to secure 88 grand prix wins, winning 5 Drivers’
          World Championships and two Constructors’ World Championships.
        </p>
        <p className="">
          Whether it’s the F1 drivers on track, mechanics in the garage, the
          team on the pit wall, or engineers in the Purwa Technological Center,
          we are united by bravery, ingenuity, and the thrill of the chase.
        </p>
      </div>
    </div>
  );
}
