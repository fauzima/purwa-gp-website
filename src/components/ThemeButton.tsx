"use client";
import { useTheme } from "next-themes";
import { MdLightMode, MdDarkMode } from "react-icons/md";

export default function ThemeButton() {
  const { theme, setTheme } = useTheme();
  const toggleTheme = () => {
    if (theme === "dark") {
      setTheme("light");
    } else {
      setTheme("dark");
    }
  };
  return (
    <button
      onClick={toggleTheme}
      className="group flex flex-row-reverse w-fit items-center rounded ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 bg-white/25 hover:bg-white/50 dark:hover:bg-indigo-500 dark:bg-slate-600/25 transition ease-in-out"
      aria-label="Theme selector button"
      >
      {theme === "dark" ? (
        <MdDarkMode className="h-7 w-7 p-1 fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-300" />
      ) : (
        <MdLightMode className="h-7 w-7 p-1 fill-sky-400 group-hover:fill-sky-500 dark:fill-sky-300" />
      )}
      <h3 className="pl-2 text-sm">Theme</h3>
    </button>
  );
}
