import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ThemeContextProvider from "@/helpers/ThemeContext";
import Footer from "@/components/Footer";
import { Jost } from "next/font/google";
// import HeaderImage from "@/components/HeaderImage";

const jost = Jost({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: { template: "%s", default: "Purwa GP Formula One Team" },
  description: "Purwa Grand Prix Engineering Formula One Team",
  openGraph: {
    images: [`https://i.ibb.co.com/RDdZnBj/Purwa.png`],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`antialiased ${jost.className} min-h-screen bg-white text-slate-900 transition-colors ease-in-out hover:cursor-default dark:bg-slate-900 dark:text-slate-100`}
      >
        <ThemeContextProvider>
          <div className="pattern-dots fixed inset-0 -z-50 pattern-bg-white pattern-slate-400 pattern-opacity-20 pattern-size-2 dark:pattern-bg-slate-700 dark:pattern-slate-900"></div>
          {/* <HeaderImage /> */}
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
