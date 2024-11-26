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
      className="group flex w-fit flex-row-reverse items-center rounded-sm bg-white/25 shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:bg-white/50 hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-500 dark:hover:shadow-none"
      aria-label="Theme selector button"
    >
      {theme === "dark" ? (
        <MdDarkMode className="h-7 w-7 fill-sky-400 p-1 group-hover:fill-sky-500 dark:fill-sky-300" />
      ) : (
        <MdLightMode className="h-7 w-7 fill-sky-400 p-1 group-hover:fill-sky-500 dark:fill-sky-300" />
      )}
      <h3 className="pl-2 text-sm">Theme</h3>
    </button>
  );
}
