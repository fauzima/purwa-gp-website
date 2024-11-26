import PurwaLogo from "@/svg/PurwaLogo";
import FooterSocialLinks from "./FooterSocialLinks";
import BacktoTop from "./BacktoTopButton";
import FooterTexts from "./FooterTexts";
// import FooterImage from "./FooterImage";

export default function Footer() {
  return (
    <footer className="relative w-full flex-none border-t border-slate-900/10 text-slate-700 backdrop-blur transition-colors supports-[backdrop-blur]:bg-white/60 dark:border-slate-300/10 dark:bg-transparent dark:text-slate-500">
      <div className="mx-auto max-w-screen-2xl">
        <div className="mx-auto px-3 sm:px-4 lg:px-5">
          <div className="flex flex-col">
            <div className="lg:hidden">
              <BacktoTop />
            </div>
            <div className="mx-auto flex flex-col items-center gap-4 pb-5 pt-5 sm:flex-row sm:gap-3 lg:mx-0 lg:pt-8">
              <div className="mr-3 flex items-center gap-[2px] text-lg font-bold text-teal-500 transition ease-in-out">
                <PurwaLogo className="h-6 w-6 fill-sky-500 transition ease-in-out" />
                <p className="italic">
                  <span className="text-2xl font-medium not-italic text-slate-900 dark:text-slate-100">
                    PURWA
                  </span>
                  GP
                </p>
              </div>
              <FooterSocialLinks />
              <div className="ml-auto hidden lg:block">
                <BacktoTop />
              </div>
            </div>
            <FooterTexts />
          </div>
        </div>
      </div>
      {/* <FooterImage /> */}
    </footer>
  );
}
