"use client";
import { ReactNode, useState } from "react";
import { UpChevron } from "./upchevron";
import { DownChevron } from "./downchevron";

export const Question = ({
  question,
  answer,
}: {
  question: string;
  answer: ReactNode;
}) => {
  const [showQ1, setShowQ1] = useState(false);
  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-4 md:mt-16">
      <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg cursor-pointer hover:bg-gray-50">
        <button
          type="button"
          onClick={() => setShowQ1(!showQ1)}
          className="flex items-center justify-between w-full px-4 py-5 sm:p-6"
        >
          <span className="flex text-lg font-semibold text-black">
            {question}
          </span>
          {showQ1 && <UpChevron />}
          {!showQ1 && <DownChevron />}
        </button>

        <div className={`px-4 pb-5 sm:px-6 sm:pb-6 ${showQ1 ? "" : "hidden"}`}>
          {answer}
        </div>
      </div>
    </div>
  );
};
