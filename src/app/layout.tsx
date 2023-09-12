"use client";

import "./globals.css";
import { Inter, Cormorant_Garamond } from "next/font/google";
import { useState } from "react";
import Countdown from "react-countdown";
import { Analytics } from "@vercel/analytics/react";

const inter = Inter({ subsets: ["latin"] });
const coromont_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: "300",
  variable: "--font-coromont-garamond",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobileMenuActive, setIsMobileMenuActive] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuActive(!isMobileMenuActive);
  };

  const ItsHere = () => <span>Today's the day!</span>;

  const countDownRenderer = ({
    days,
    hours,
    minutes,
    seconds,
    completed,
  }: {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
    completed: boolean;
  }) => {
    if (completed) {
      // Render a completed state
      return <ItsHere />;
    } else {
      // Render a countdown
      return <span>{days} days to go!</span>;
    }
  };

  return (
    <html lang="en">
      <title>Jessica & Brent</title>
      <body className={`${inter.className} ${coromont_garamond.className}`}>
        <header>
          <nav className="bg-white shadow">
            <div className="container mx-auto px-6 py-3 ">
              <div className="md:flex md:items-center md:justify-between">
                <div className="flex justify-between items-center">
                  <div className="text-xl font-semibold text-gray-700">
                    <a
                      href="/"
                      className="text-gray-800 text-xl font-bold hover:text-gray-700 md:text-2xlx"
                    >
                      J & B
                    </a>
                  </div>

                  <div
                    className={`flex md:hidden ${
                      isMobileMenuActive ? "hidden" : ""
                    }`}
                  >
                    <button
                      type="button"
                      className="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600"
                      onClick={() => toggleMobileMenu()}
                      aria-label="toggle menu"
                    >
                      <svg viewBox="0 0 24 24" className="h-6 w-6 fill-current">
                        <path
                          fillRule="evenodd"
                          d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                        ></path>
                      </svg>
                    </button>
                  </div>
                </div>

                <section
                  className={`flex ${isMobileMenuActive ? "" : "hidden"}`}
                >
                  <div className="flex-grow">
                    <div
                      className="absolute top-0 right-0 px-4 py-4"
                      onClick={() => toggleMobileMenu()}
                    >
                      <svg
                        className="h-8 w-8 text-gray-600"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </div>
                    <ul className="flex flex-col items-center justify-center min-h-[250px]">
                      <li className="border-b border-gray-400 my-4 uppercase">
                        <a href="/gallery">Photos</a>
                      </li>
                      <li className="border-b border-gray-400 my-4 uppercase">
                        <a href="/faq">Frequently Asked Questions</a>
                      </li>
                    </ul>
                  </div>
                </section>

                <div className="hidden -mx-4 md:flex md:items-center">
                  <a
                    href="/gallery"
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                  >
                    Photos
                  </a>
                  <a
                    href="/faq"
                    className="block mx-4 mt-2 md:mt-0 text-sm text-gray-700 capitalize hover:text-blue-600"
                  >
                    Frequently Asked Questions
                  </a>
                </div>
              </div>
            </div>
          </nav>

          <div className="w-full bg-cover bg-center bg-flower-pattern h-96">
            <div className="flex items-end justify-center h-full w-full">
              <div className="text-center">
                <h1 className="fancy text-5xl lg:text-6xl">
                  Jessica and Brent
                </h1>
                <h2 className="text-3xl lg:text-4xl">
                  July 20th, 2024 • Stratford, PE
                </h2>
                <h3 className="text-2xl">
                  <Countdown
                    renderer={countDownRenderer}
                    date={new Date("2024-07-20T00:00:00").getTime()}
                  />
                </h3>
              </div>
            </div>
          </div>
        </header>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
