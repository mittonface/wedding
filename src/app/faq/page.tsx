"use client";
import { useState } from "react";
import { UpChevron } from "./upchevron";
import { DownChevron } from "./downchevron";

export default function FrequentlyAskedQuestions() {
  const [showQ1, setShowQ1] = useState(false);

  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"></p>
        </div>

        <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
          <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
            <button
              type="button"
              onClick={() => setShowQ1(!showQ1)}
              className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
            >
              <span className="flex text-lg font-semibold text-black">
                {" "}
                Where is the wedding taking place?{" "}
              </span>

              {showQ1 && <UpChevron />}
              {!showQ1 && <DownChevron />}
            </button>

            <div
              className={`px-4 pb-5 sm:px-6 sm:pb-6 ${showQ1 ? "" : "hidden"}`}
            >
              <p>
                The ceremony and dinner reception will be held at Fox Meadow
                Golf Course the afternoon of July 20th, 2024 (Time TBA). A
                cocktail hour with hor d'oeuvres will take place between the
                ceremony and reception.
              </p>
              <br />
              <p>Partying to follow. 🍻🍷💃</p>
            </div>
          </div>
        </div>

        <p className="text-center text-gray-600 textbase mt-9">
          Didn’t find the answer you were looking for?{" "}
          <a
            href="mailto:wedding@jessandbrent.ca"
            title=""
            className="font-medium text-blue-600 transition-all duration-200 hover:text-blue-700 focus:text-blue-700 hover:underline"
          >
            Email us!
          </a>
        </p>
      </div>
    </section>
  );
}
