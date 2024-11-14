import "aos/dist/aos.css";
import UpNextCard from "./UpNextCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function UpNext() {
  return (
    <div className="max-w-screen-2xl mx-auto w-full mb-[15vh] lg:mb-[20vh]">
      <div className="flex flex-col">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="text-4xl md:text-6xl mb-[10vh] px-4 sm:px-8"
        >
          <h1 className="font-semibold mb-2 lg:mb-4 text-sky-700 dark:text-slate-100">
            UP NEXT
          </h1>
          <h1 className="font-light dark:text-sky-300">2024 SEASON</h1>
        </div>
        <UpNextCard data-aos="fade-right" data-aos-once="true" />
        <Link
          data-aos="fade-right"
          data-aos-once="true"
          data-aos-offset="0"
          href={"/season"}
          className="flex w-fit mt-10 mx-auto p-5 h-9 items-center text-base text-slate-100 rounded ring-1 shadow shadow-indigo-200 ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:bg-indigo-500 bg-sky-500 transition ease-in-out"
        >
          <h3>Check the full schedule</h3>
          <FaArrowRight className="w-4 h-4 ml-2" />
        </Link>
      </div>
    </div>
  );
}
