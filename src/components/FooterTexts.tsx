export default function FooterTexts() {
  return (
    <div className="flex flex-col text-slate-700 dark:text-slate-400">
      <div className="flex flex-col items-center text-lg lg:flex-row-reverse lg:justify-between lg:text-base">
        <ul className="flex flex-wrap justify-center gap-5 pb-5 lg:gap-4">
          <li className="transition ease-in-out hover:cursor-pointer hover:text-sky-500 hover:underline">
            Career
          </li>
          <li className="transition ease-in-out hover:cursor-pointer hover:text-sky-500 hover:underline">
            Investors
          </li>
          <li className="transition ease-in-out hover:cursor-pointer hover:text-sky-500 hover:underline">
            Community Code
          </li>
          <li className="transition ease-in-out hover:cursor-pointer hover:text-sky-500 hover:underline">
            Cookie Policy
          </li>
          <li className="transition ease-in-out hover:cursor-pointer hover:text-sky-500 hover:underline">
            Privacy Policy
          </li>
          <li className="transition ease-in-out hover:cursor-pointer hover:text-sky-500 hover:underline">
            Licensing
          </li>
        </ul>
        <p className="pb-5 text-center text-sm lg:text-start">
          © 2024 Purwa Grand Prix Engineering, Ltd. All Rights Reserved.
        </p>
      </div>
      <p className="pb-3 text-xs sm:pb-8">
        This fictional website is created by Fauzi Makarim. Names, characters,
        places and incidents either are products of the author’s imagination or
        are used fictitiously and for educational purposes only. Any resemblance
        to actual events or locales or persons, living or dead, is entirely
        coincidental.
      </p>
    </div>
  );
}
