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
      className={`${isVisible ? "flex" : "hidden"} mt-5 lg:my-0 mx-auto lg:mx-0 px-3 py-5 h-9 items-center justify-center font-bold text-slate-900 dark:text-slate-300 hover:text-sky-700 dark:hover:text-sky-300 rounded-md ring-1 shadow shadow-indigo-200 ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none dark:hover:bg-indigo-500 dark:bg-slate-600/25 transition ease-in-out`}
    >
      <FaArrowUp className="w-4 h-4 mr-2" />
      <h3>Back to top</h3>
    </button>
  );
}
