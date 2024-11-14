import { MdClose } from "react-icons/md";
import NavDrawerUl from "./NavDrawerUl";
import PurwaLogo from "@/svg/PurwaLogo";

export default function NavDrawer({
  isOpen,
  closeDrawer,
}: {
  isOpen: boolean;
  closeDrawer: () => void;
}) {
  return (
    <div className="block lg:hidden">
      <div
        onClick={() => closeDrawer()}
        className={`${isOpen ? "block" : "hidden"} fixed w-full h-[calc(100vh-60px)] z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80`}
      ></div>
      <div
        onClick={() => closeDrawer()}
        className={`${isOpen ? "block" : "hidden"} fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80`}
      ></div>
      <div
        className={`fixed top-0 -left-80 z-50 w-80 max-w-[calc(100%-3rem)] h-screen p-10 overflow-y-hidden transition-transform ${isOpen ? "translate-x-full" : "-translate-x-full"} duration-1000 bg-white/85 dark:bg-slate-800/75`}
      >
        <div className="relative">
          <div
            className={`absolute flex gap-1 rotate-90 -top-[20%] -left-[85%] ${isOpen ? "translate-y-[150%]" : "-translate-y-[400%]"} text-teal-400/40 transition-transform duration-[1500ms] font-jost text-[80px] font-bold pointer-events-none items-center`}
          >
            <PurwaLogo className="w-[120px] h-[120px] fill-sky-400/25" />
            <p className="italic">
              <span className="text-[120px] not-italic font-medium text-slate-500/25">
                PURWA
              </span>
              GP
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => closeDrawer()}
              aria-label="Close navigation drawer button"
              className="group absolute top-0 right-0 rounded-md ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 dark:hover:bg-indigo-600 dark:bg-slate-700 transition ease-in-out"
            >
              <MdClose className="h-7 w-7 p-[2px] text-indigo-300 group-hover:text-indigo-400 dark:text-slate-300" />
            </button>
            <nav className="">
              <NavDrawerUl closeDrawer={closeDrawer} />
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
