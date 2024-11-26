import PurwaLogo from "@/svg/PurwaLogo";

export default function Loading() {
  return (
    <div className="fixed inset-0 grid place-content-center items-center brightness-90 dark:brightness-100">
      <div className="text-surface col-start-1 row-start-1 mx-auto h-40 w-40 animate-spin rounded-full border-[15px] border-solid border-teal-300 border-e-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"></div>
      <PurwaLogo className="col-start-1 row-start-1 mx-auto h-16 w-16 text-sky-300" />
    </div>
  );
}
