import PurwaLogo from "@/svg/PurwaLogo";

export default function Loading() {
  return (
    <div className="fixed grid inset-0 items-center place-content-center brightness-90 dark:brightness-100">
      <div className="col-start-1 row-start-1 mx-auto h-40 w-40 animate-spin rounded-full border-[15px] border-teal-300 border-solid border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <PurwaLogo className="col-start-1 row-start-1 mx-auto h-16 w-16 text-sky-300" />
    </div>
  );
}
