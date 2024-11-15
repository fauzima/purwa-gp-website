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
        className={`antialiased ${jost.className} bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 transition-colors ease-in-out min-h-screen hover:cursor-default`}
      >
        <ThemeContextProvider>
          {/* <HeaderImage /> */}
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </ThemeContextProvider>
      </body>
    </html>
  );
}
