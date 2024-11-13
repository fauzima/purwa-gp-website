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
    <ul className="hidden lg:flex gap-4 text-slate-900 dark:text-slate-300 lg:mx-auto font-spacegrotesk">
      {navigation.map((item, idx) => {
        const isActive = router === item.href;
        return (
          <li key={idx}>
            <Link
              href={item.href}
              className={classNames(
                isActive
                  ? "w-24 h-9 flex items-center justify-center text-sky-600 dark:text-sky-400 rounded ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 bg-white/50 dark:bg-sky-600/25 transition ease-in-out"
                  : "w-24 h-9 flex items-center justify-center hover:text-sky-700 dark:hover:text-sky-300 rounded ring-1 shadow shadow-indigo-200 ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none dark:hover:bg-indigo-500 bg-white/25 hover:bg-white/50 dark:bg-slate-600/25 transition ease-in-out"
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
