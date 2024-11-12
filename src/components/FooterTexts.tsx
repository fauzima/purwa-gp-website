export default function FooterTexts() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between text-lg lg:text-base items-center">
        <ul className="flex flex-wrap justify-evenly gap-5 lg:gap-4 pb-5">
          <li className="hover:underline hover:cursor-pointer">Career</li>
          <li className="hover:underline hover:cursor-pointer">Investors</li>
          <li className="hover:underline hover:cursor-pointer">Community Code</li>
          <li className="hover:underline hover:cursor-pointer">Cookie Policy</li>
          <li className="hover:underline hover:cursor-pointer">Privacy Policy</li>
          <li className="hover:underline hover:cursor-pointer">Licensing</li>
        </ul>
        <p className="text-center lg:text-start pb-5 text-sm ">
          © 2024 Purwa Grand Prix Engineering, Ltd. All Rights Reserved.
        </p>
      </div>
      <p className="text-xs pb-3 sm:pb-8">
        This fictional website is created by Fauzi Makarim. Names, characters,
        places and incidents either are products of the author’s imagination or
        are used fictitiously and for educational purposes only. Any resemblance
        to actual events or locales or persons, living or dead, is entirely
        coincidental.
      </p>
    </div>
  );
}
