"use client";
import { Question } from "./question";

export default function FrequentlyAskedQuestions() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"></p>
        </div>
        <Question
          question="Where is the wedding taking place?"
          answer={
            <>
              <p>
                The ceremony and dinner reception will be held at Fox Meadow
                Golf Course the afternoon of July 20th, 2024 (Time TBA). A
                cocktail hour with hor d'oeuvres will take place between the
                ceremony and reception.
              </p>
              <br />
              <p>Partying to follow. 🍻🍷💃</p>
            </>
          }
        />
        <Question
          question="What are the transportation options?"
          answer={
            <>
              <p>
                The venue is located in Stratford, PE, which is just outside of
                Charlottetown. Taxi service will be available after the wedding.
              </p>
              <br />
              <ul>
                <li>City Taxi - (902) 569-9999</li>
                <li>Co-op Taxi - (902) 628-8200</li>
              </ul>
            </>
          }
        />

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
