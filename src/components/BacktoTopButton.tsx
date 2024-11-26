"use client";
import { useEffect, useState } from "react";
import { FaArrowUp } from "react-icons/fa";

export default function BacktoTop() {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 1) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isBrowser = () => typeof window !== "undefined";

  const scrolltoTop = () => {
    if (!isBrowser()) return;
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <button
      onClick={scrolltoTop}
      aria-label="Back to top button"
      className={`${isVisible ? "flex" : "hidden"} mx-auto mt-5 h-9 items-center justify-center rounded-sm px-3 py-5 font-bold text-slate-900 shadow shadow-indigo-200 ring-1 ring-slate-900/10 transition ease-in-out hover:text-sky-700 dark:bg-slate-600/25 dark:text-slate-300 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-500 dark:hover:text-sky-300 dark:hover:shadow-none lg:mx-0 lg:my-0`}
    >
      <FaArrowUp className="mr-2 h-4 w-4" />
      <h3>Back to top</h3>
    </button>
  );
}
