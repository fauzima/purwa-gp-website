"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { IconType } from "react-icons";
import { MdHome, MdInfo, MdPerson, MdCalendarMonth } from "react-icons/md";

interface NavProps {
  name: string;
  href: string;
  Icon: IconType;
}

const navigation: NavProps[] = [
  { name: "Home", href: "/", Icon: MdHome },
  { name: "About", href: "/about", Icon: MdInfo },
  { name: "Team", href: "/team", Icon: MdPerson },
  { name: "Season", href: "/season", Icon: MdCalendarMonth },
];

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function NavDrawerUl({
  closeDrawer,
}: {
  closeDrawer: () => void;
}) {
  const router = usePathname();
  const doNothing = () => {};
  return (
    <ul className="z-50">
      {navigation.map((item, idx) => {
        const isActive = router === item.href;
        return (
          <li key={idx}>
            <Link
              onClick={isActive ? () => doNothing() : () => closeDrawer()}
              href={item.href}
              className={classNames(
                isActive
                  ? "group mb-6 flex items-center text-2xl text-sky-500 dark:text-sky-500"
                  : "group mb-6 flex items-center text-xl text-slate-500 duration-75 hover:text-2xl hover:text-slate-900 dark:text-slate-400 dark:hover:text-slate-300",
              )}
            >
              <div
                className={classNames(
                  isActive
                    ? "mr-4 rounded-sm shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-sky-200 group-hover:ring-slate-900/10 dark:bg-sky-500 dark:shadow-none dark:ring-0 dark:group-hover:bg-sky-500 dark:group-hover:shadow-none"
                    : "mr-4 rounded-sm shadow-sm ring-1 ring-slate-900/5 group-hover:shadow group-hover:shadow-indigo-200 group-hover:ring-slate-900/10 dark:bg-slate-700 dark:shadow-none dark:ring-0 dark:group-hover:bg-indigo-600 dark:group-hover:shadow-none",
                )}
              >
                <item.Icon
                  className={classNames(
                    isActive
                      ? "h-8 w-8 fill-sky-500 p-[2px] dark:fill-sky-300"
                      : "h-7 w-7 fill-indigo-300 p-1 duration-75 group-hover:h-8 group-hover:w-8 group-hover:fill-indigo-400 dark:fill-slate-300",
                  )}
                />
              </div>
              <h3>{item.name}</h3>
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
