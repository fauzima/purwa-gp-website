export default function FooterTexts() {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col lg:flex-row-reverse lg:justify-between text-sm">
        <div className="flex flex-wrap justify-center gap-4 pb-5">
          <p className="hover:underline hover:cursor-pointer">Investors</p>
          <p className="hover:underline hover:cursor-pointer">Community Code</p>
          <p className="hover:underline hover:cursor-pointer">Cookie Policy</p>
          <p className="hover:underline hover:cursor-pointer">Privacy Policy</p>
          <p className="hover:underline hover:cursor-pointer">Licensing</p>
        </div>
        <p className="text-center lg:text-start pb-5">
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
