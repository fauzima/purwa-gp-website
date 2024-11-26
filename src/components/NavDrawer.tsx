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
        className={`${isOpen ? "block" : "hidden"} fixed z-40 h-[calc(100vh-60px)] w-full bg-black/20 backdrop-blur-sm dark:bg-slate-900/80`}
      ></div>
      <div
        onClick={() => closeDrawer()}
        className={`${isOpen ? "block" : "hidden"} fixed inset-0 z-40 bg-black/20 backdrop-blur-sm dark:bg-slate-900/80`}
      ></div>
      <div
        className={`fixed -left-80 top-0 z-50 h-screen w-80 max-w-[calc(100%-3rem)] overflow-y-hidden p-10 transition-transform ${isOpen ? "translate-x-full" : "-translate-x-full"} bg-white/85 duration-1000 dark:bg-slate-800/75`}
      >
        <div className="relative">
          <div
            className={`absolute -left-[85%] -top-[20%] flex rotate-90 gap-1 ${isOpen ? "translate-y-[150%]" : "-translate-y-[400%]"} pointer-events-none items-center text-[80px] font-bold text-teal-400/40 transition-transform duration-[1500ms]`}
          >
            <PurwaLogo className="h-[120px] w-[120px] fill-sky-400/25" />
            <p className="italic">
              <span className="text-[120px] font-medium not-italic text-slate-500/25">
                PURWA
              </span>
              GP
            </p>
          </div>
          <div className="relative">
            <button
              onClick={() => closeDrawer()}
              aria-label="Close navigation drawer button"
              className="group absolute right-0 top-0 rounded-sm shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-700 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-600 dark:hover:shadow-none"
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
