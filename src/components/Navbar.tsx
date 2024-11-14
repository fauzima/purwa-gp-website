"use client";
import Link from "next/link";
import { useState } from "react";
import NavDrawer from "./NavDrawer";
import { TiThMenu } from "react-icons/ti";
import NavbarUl from "./NavbarUl";
import PurwaLogo from "@/svg/PurwaLogo";
import ThemeButton from "./ThemeButton";

export default function Navbar() {
  const [isNavOpen, setNav] = useState<boolean>(false);
  const navButton = () => {
    setNav(!isNavOpen);
  };
  return (
    <header className="fixed top-0 z-40 w-full backdrop-blur flex-none transition-colors supports-[backdrop-blur]:bg-white/60 dark:bg-transparent border-b border-slate-900/10 dark:border-slate-300/10">
      <nav className="max-w-screen-2xl mx-auto">
        <div className=" mx-auto px-4 sm:px-8">
          <div className="h-[60px] relative flex w-full justify-between items-center">
            <button
              onClick={() => navButton()}
              aria-label="Open navigation drawer button"
              className="group flex w-fit items-center lg:hidden rounded ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 bg-white/25 hover:bg-white/50 dark:hover:bg-indigo-600 dark:bg-slate-600/25 transition ease-in-out"
            >
              <TiThMenu className="h-7 w-7 p-[5px] text-indigo-300 group-hover:text-indigo-400 dark:text-slate-300" />
              <h3 className="text-sm pr-2">Menu</h3>
            </button>
            <Link
              href={"/"}
              className="group text-teal-400/75 hover:text-teal-500 transition ease-in-out mx-auto lg:mr-[122.367px] lg:mx-0 flex gap-[2px] items-center font-jost text-lg font-bold"
            >
              <PurwaLogo className="h-6 w-6 fill-sky-400/75 group-hover:fill-sky-500 transition ease-in-out" />
              <p className="italic">
                <span className="not-italic text-2xl font-medium text-slate-900 dark:text-slate-100">
                  PURWA
                </span>
                GP
              </p>
            </Link>
            <NavbarUl />
            <div className="relative h-7 w-[83.5167] ml-[-8.7px] lg:ml-0 lg:w-64 lg:pl-[172.4833px]">
              <ThemeButton />
            </div>
          </div>
        </div>
      </nav>
      <NavDrawer isOpen={isNavOpen} closeDrawer={navButton} />
    </header>
  );
}
