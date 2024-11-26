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
    <header className="fixed top-0 z-40 w-full flex-none border-b border-slate-900/10 backdrop-blur transition-colors supports-[backdrop-blur]:bg-white/60 dark:border-slate-300/10 dark:bg-transparent">
      <nav className="mx-auto max-w-screen-2xl">
        <div className="mx-auto px-4 sm:px-8">
          <div className="relative flex h-[60px] w-full items-center justify-between">
            <button
              onClick={() => navButton()}
              aria-label="Open navigation drawer button"
              className="group flex w-fit items-center rounded-sm bg-white/25 shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:bg-white/50 hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-600 dark:hover:shadow-none lg:hidden"
            >
              <TiThMenu className="h-7 w-7 p-[5px] text-indigo-300 group-hover:text-indigo-400 dark:text-slate-300" />
              <h3 className="pr-2 text-sm">Menu</h3>
            </button>
            <Link
              href={"/"}
              className="group mx-auto flex items-center gap-[2px] text-lg font-bold text-teal-400/75 transition ease-in-out hover:text-teal-500 lg:mx-0 lg:mr-[122.367px]"
            >
              <PurwaLogo className="h-6 w-6 fill-sky-400/75 transition ease-in-out group-hover:fill-sky-500" />
              <p className="italic">
                <span className="text-2xl font-medium not-italic text-slate-900 dark:text-slate-100">
                  PURWA
                </span>
                GP
              </p>
            </Link>
            <NavbarUl />
            <div className="relative ml-[-8.7px] h-7 w-[83.5167] lg:ml-0 lg:w-64 lg:pl-[172.4833px]">
              <ThemeButton />
            </div>
          </div>
        </div>
      </nav>
      <NavDrawer isOpen={isNavOpen} closeDrawer={navButton} />
    </header>
  );
}
