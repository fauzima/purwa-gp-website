import "aos/dist/aos.css";
import UpNextCard from "./UpNextCard";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function UpNext() {
  return (
    <div className="mx-auto mb-[15vh] w-full max-w-screen-2xl lg:mb-[20vh]">
      <div className="flex flex-col">
        <div
          data-aos="fade-right"
          data-aos-once="true"
          className="mb-[10vh] px-4 text-4xl sm:px-8 md:text-6xl"
        >
          <h1 className="mb-2 font-semibold text-sky-700 dark:text-slate-100 lg:mb-4">
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
          className="mx-auto mt-10 flex h-9 w-fit items-center rounded-sm bg-sky-500 p-5 text-base text-slate-100 shadow shadow-indigo-200 ring-1 ring-slate-900/10 transition ease-in-out hover:bg-indigo-500 dark:shadow-none dark:ring-0 dark:hover:shadow-none"
        >
          <h3>Check the full schedule</h3>
          <FaArrowRight className="ml-2 h-4 w-4" />
        </Link>
      </div>
    </div>
  );
}
