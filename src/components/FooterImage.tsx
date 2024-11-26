import Image from "next/image";
import lightrays from "../public/lightrays.png";
import darkrays from "../public/darkrays.png";

export default function FooterImage() {
  return (
    <div className="pointer-events-none absolute inset-x-0 -left-1/3 bottom-0 z-20 flex justify-center overflow-hidden">
      <div className="flex w-[108rem] flex-none justify-end">
        <Image
          className="w-[71.75rem] max-w-none flex-none rotate-180 dark:hidden"
          src={lightrays}
          alt="light rays"
        />
        <Image
          className="hidden w-[90rem] max-w-none flex-none rotate-180 dark:block"
          src={darkrays}
          alt=""
        />
      </div>
    </div>
  );
}
