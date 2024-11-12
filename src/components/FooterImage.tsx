import Image from "next/image";
import lightrays from "../public/lightrays.png";
import darkrays from "../public/darkrays.png";

export default function FooterImage() {
  return (
    <div className="absolute z-20 bottom-0 inset-x-0 -left-1/3 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <Image
          className="w-[71.75rem] flex-none max-w-none dark:hidden rotate-180"
          src={lightrays}
          alt="light rays"
        />
        <Image
          className="w-[90rem] flex-none max-w-none hidden dark:block rotate-180"
          src={darkrays}
          alt=""
        />
      </div>
    </div>
  );
}
