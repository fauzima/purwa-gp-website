import Link from "next/link";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

export default function FooterSocialLinks() {
  return (
    <div className="flex gap-3 items-center">
      <Link
        className="group rounded-md ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 dark:hover:bg-indigo-300 dark:bg-slate-600/25 transition ease-in-out"
        href={"mailto:partnerships@purwa.gp"}
        target="_blank"
        aria-label="email"
      >
        <MdEmail className="h-7 w-7 p-1 group-hover:text-[#333]" />
      </Link>
      <Link
        className="group rounded-md ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 dark:hover:bg-indigo-300 dark:bg-slate-600/25 transition ease-in-out"
        href={"https://fb.com"}
        target="_blank"
        aria-label="Facebook"
      >
        <FaFacebook className="h-7 w-7 p-1 group-hover:text-[#4267B2]" />
      </Link>
      <Link
        className="group rounded-md ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 dark:hover:bg-indigo-300 dark:bg-slate-600/25 transition ease-in-out"
        href={"https://instagram.com"}
        target="_blank"
        aria-label="Instagram"
      >
        <FaInstagram className="h-7 w-7 p-[3px] group-hover:text-[#E1306C]" />
      </Link>
      <Link
        className="group rounded-md ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 dark:hover:bg-indigo-300 dark:bg-slate-600/25 transition ease-in-out"
        href={"https://linkedin.com"}
        target="_blank"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="h-7 w-7 p-1 group-hover:text-[#0072b1]" />
      </Link>
      <Link
        className="group rounded-md ring-1 ring-slate-900/5 shadow-sm hover:shadow hover:ring-slate-900/10 dark:ring-0 dark:shadow-none dark:hover:shadow-none hover:shadow-indigo-200 dark:hover:bg-indigo-300 dark:bg-slate-600/25 transition ease-in-out"
        href={"https://x.com"}
        target="_blank"
        aria-label="X/Twitter"
      >
        <FaXTwitter className="h-7 w-7 p-1 group-hover:text-[#333]" />
      </Link>
    </div>
  );
}
