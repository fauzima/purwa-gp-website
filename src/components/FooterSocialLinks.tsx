import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function FooterSocialLinks() {
  return (
    <div className="flex items-center gap-5 md:gap-3">
      <Link
        className="group rounded-sm shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-300 dark:hover:shadow-none"
        href={"mailto:partnerships@purwa.gp"}
        target="_blank"
        aria-label="email"
      >
        <MdEmail className="h-7 w-7 p-1 group-hover:text-[#333]" />
      </Link>
      <Link
        className="group rounded-sm shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-300 dark:hover:shadow-none"
        href={"https://fb.com"}
        target="_blank"
        aria-label="Facebook"
      >
        <FaFacebook className="h-7 w-7 p-1 group-hover:text-[#4267B2]" />
      </Link>
      <Link
        className="group rounded-sm shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-300 dark:hover:shadow-none"
        href={"https://instagram.com"}
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7 p-[3px] group-hover:text-[#E1306C]" />
      </Link>
      <Link
        className="group rounded-sm shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-300 dark:hover:shadow-none"
        href={"https://linkedin.com"}
        target="_blank"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="h-7 w-7 p-1 group-hover:text-[#0072b1]" />
      </Link>
      <Link
        className="group rounded-sm shadow-sm ring-1 ring-slate-900/5 transition ease-in-out hover:shadow hover:shadow-indigo-200 hover:ring-slate-900/10 dark:bg-slate-600/25 dark:shadow-none dark:ring-0 dark:hover:bg-indigo-300 dark:hover:shadow-none"
        href={"https://x.com"}
        target="_blank"
        aria-label="X/Twitter"
      >
        <FaXTwitter className="h-7 w-7 p-1 group-hover:text-[#333]" />
      </Link>
    </div>
  );
}
