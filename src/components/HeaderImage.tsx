import Image from "next/image";
import lightrays from "../public/lightrays.png";
import darkrays from "../public/darkrays.png";

export default function HeaderImage() {
  return (
    <div className="absolute z-20 top-0 inset-x-0 flex justify-center overflow-hidden pointer-events-none">
      <div className="w-[108rem] flex-none flex justify-end">
        <Image
          className="w-[71.75rem] flex-none max-w-none dark:hidden"
          src={lightrays}
          priority={true}
          width={1148}
          height={334}
          alt="light rays"
        />
        <Image
          className="w-[90rem] flex-none max-w-none hidden dark:block"
          src={darkrays}
          width={1140}
          height={616}
          alt=""
        />
      </div>
    </div>
  );
}
