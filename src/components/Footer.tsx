import PurwaLogo from "@/svg/PurwaLogo";
import FooterSocialLinks from "./FooterSocialLinks";
import BacktoTop from "./BacktoTopButton";
import FooterTexts from "./FooterTexts";
// import FooterImage from "./FooterImage";

export default function Footer() {
  return (
    <footer className="relative w-full flex-none transition-colors supports-[backdrop-blur]:bg-white/60 dark:bg-transparent border-t text-slate-700 dark:text-slate-500 border-slate-900/10 dark:border-slate-300/10">
      <div className="max-w-screen-2xl mx-auto">
        <div className="mx-auto px-3 sm:px-4 lg:px-5">
          <div className="flex flex-col">
            <div className="lg:hidden">
              <BacktoTop />
            </div>
            <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-3 pt-5 lg:pt-8 pb-5 mx-auto lg:mx-0">
              <div className="text-teal-500 transition ease-in-out  mr-3 flex gap-[2px] items-center font-jost text-lg font-bold">
                <PurwaLogo className="h-6 w-6 fill-sky-500 transition ease-in-out" />
                <p className="italic font-jost">
                  <span className="not-italic text-2xl font-medium text-slate-900 dark:text-slate-100">
                    PURWA
                  </span>
                  GP
                </p>
              </div>
              <FooterSocialLinks />
              <div className="hidden lg:block ml-auto">
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
