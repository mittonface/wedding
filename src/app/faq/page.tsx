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

        <Question
          question="Is the venue accessible?"
          answer={
            <>
              <p>
                Yes! There is an elevator from the main level of Fox Meadow to
                the reception area and there is access to the reception area
                from outside.
              </p>
            </>
          }
        />

        <Question
          question="Where can I stay on PEI?"
          answer={
            <>
              <p>Information to follow. We'll put together a list soon!</p>
            </>
          }
        />

        <Question
          question="What is the dress code?"
          answer={
            <>
              <p>
                We recommend semi-formal to cocktail attire, but wish for everyone
                to be comfortable! There is no specific colour palette to
                follow.
              </p>
            </>
          }
        />

        <Question
          question="Can I bring a plus one?"
          answer={
            <>
              <p>
                This will be indicated on your invitation for your convenience.
              </p>
            </>
          }
        />

        <Question
          question="Can I bring my children?"
          answer={
            <>
              <p>
                To allow all guests, including parents, a night of relaxation and
                uninhibited partying, we ask that our wedding be child free.
              </p>
            </>
          }
        />

        <Question
          question="What food will be served?"
          answer={
            <>
              <p>
                Hor d'oeuvres will be available during cocktail hour, followed
                by a sit down dinner. Dinner choices will be available with your
                RSVP.
              </p>
              <br />
              <p>
                If you have any dietary requirements, please let us know either
                with the RSVP or by emailing{" "}
                <a href="mailto:wedding@jessandbrent.ca">
                  wedding@jessandbrent.ca
                </a>
              </p>
            </>
          }
        />

        <Question
          question="Will a bar be available?"
          answer={
            <>
              <p>
                An open-bar service will be available following the service. If
                you wish, bring a small amount of cash to tip the bartenders. If
                you intend to drink, please ensure you have a plan to get home.
              </p>
            </>
          }
        />

        <Question
          question="Where can I find your wedding registry?"
          answer={
            <>
              <p>
                Your prescence is our present. If you would like to bring a
                card, there will be a box for them at the reception.
              </p>
            </>
          }
        />

        <Question
          question="Am I allowed to take photos?"
          answer={
            <>
              <p>
                We prefer the ceremony remains unplugged and that no photos
                (including phones, tablets, cameras, etc) are taken during the
                ceremony. We will have a wonderful photographer throughout the
                entire day to capture memories.
              </p>
              <br />
              <p>
                Photos are welcome at any other point throughout the day, and
                you can share them to social media at any point.
              </p>
            </>
          }
        />

        <Question
          question="What else can I do while I'm on PEI?"
          answer={
            <>
              <p>Here are a few of our favourite places:</p>
              <br />
              <ul>
                <li>
                  &#x2022; Upstreet Craft Brewery - this is where we had our
                  first date!
                </li>
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
