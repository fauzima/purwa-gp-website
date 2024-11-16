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
      className="max-w-screen-2xl mx-auto w-full mb-[15vh] lg:mb-[20vh] px-4 sm:px-8 text-xl text-slate-700 dark:text-slate-300"
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
        className="flex w-fit mt-10 mx-auto lg:mx-0 p-5 h-9 items-center text-base text-slate-100 rounded-sm ring-1 shadow shadow-indigo-200 ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:bg-indigo-500 bg-sky-500 transition ease-in-out"
      >
        <h3>Read our full story</h3>
        <FaArrowRight className="w-4 h-4 ml-2" />
      </Link>
    </div>
  );
}
{/* <Link
  href={"/about"}
  className="relative flex w-fit mt-10 p-5 h-9 items-center text-base rounded hover:bg-sky-500 transition ease-in-out"
>
  <h3>Read our full story</h3>
  <FaArrowRight className="w-4 h-4 ml-2" />
  <div className="absolute -top-2 -left-2 h-4 w-4 rounded-full bg-slate-800 dark:bg-slate-100 animate-pulse"></div>
</Link> */}
