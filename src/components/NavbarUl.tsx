"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Team", href: "/team" },
  { name: "Season", href: "/season" },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavbarUl() {
  const router = usePathname();
  return (
    <ul className="hidden gap-4 font-spacegrotesk text-slate-900 dark:text-slate-300 lg:mx-auto lg:flex">
      {navigation.map((item, idx) => {
        const isActive = router === item.href;
        return (
          <li key={idx}>
            <Link
              href={item.href}
              className={classNames(
                isActive
                  ? "flex h-9 w-24 items-center justify-center rounded-sm bg-white/50 text-sky-600 shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-sky-600/25 dark:text-sky-400 dark:shadow-none dark:ring-0 dark:hover:shadow-none"
                  : "flex h-9 w-24 items-center justify-center rounded-sm bg-white/25 shadow shadow-indigo-200 ring-1 ring-slate-900/10 transition ease-in-out hover:bg-white/50 hover:text-sky-700 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-500 dark:hover:text-sky-300 dark:hover:shadow-none",
              )}
            >
              <h3>{item.name}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
