"use client";
import AOS from "aos";
import "aos/dist/aos.css";
import Link from "next/link";
import { useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";

export default function HomeSubHero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="fade-right"
      data-aos-once="true"
      className="mx-auto mb-[15vh] w-full max-w-screen-2xl px-4 text-xl text-slate-700 dark:text-slate-300 sm:px-8 lg:mb-[20vh]"
    >
      <div className="flex flex-col gap-10">
        <p className="font-semibold">
          Step into a world of exhilaration with Purwa GP...
        </p>
        <p className="">
          After our first taste of victory in F1 at the 1990 Belgian Grand Prix,
          Purwa GP has gone on to secure 88 grand prix wins, winning 5 Drivers’
          World Championships and 3 Constructors’ World Championships.
        </p>
        <p className="">
          Whether it’s the F1 drivers on track, mechanics in the garage, the
          team on the pit wall, or engineers in the Purwa Technological Center,
          we are united by bravery, ingenuity, and the thrill of the chase.
        </p>
      </div>
      <Link
        href={"/about"}
        className="mx-auto mt-10 flex h-9 w-fit items-center rounded-sm bg-sky-500 p-5 text-base text-slate-100 shadow shadow-indigo-200 ring-1 ring-slate-900/10 transition ease-in-out hover:bg-indigo-500 dark:shadow-none dark:ring-0 dark:hover:shadow-none lg:mx-0"
      >
        <h3>Read our full story</h3>
        <FaArrowRight className="ml-2 h-4 w-4" />
      </Link>
    </div>
  );
}
{
  /* <Link
  href={"/about"}
  className="relative flex w-fit mt-10 p-5 h-9 items-center text-base rounded hover:bg-sky-500 transition ease-in-out"
>
  <h3>Read our full story</h3>
  <FaArrowRight className="w-4 h-4 ml-2" />
  <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-slate-800 dark:bg-slate-100 animate-pulse"></div>
</Link> */
}
