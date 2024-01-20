"use client";

export default function RSVPYes() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Thanks for RSVP'ing. We look forward to spending our day with you!
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600">
            If you have any questions leading up to the day, feel free to reach
            out to us! Feel free to go back and change any information on your
            RSVP at any time.
          </p>
          <p>
            {" "}
            <a
              href="mailto:wedding@jessandbrent.ca"
              style={{ textDecoration: "underline" }}
            >
              wedding@jessandbrent.ca
            </a>{" "}
          </p>
        </div>
      </div>
    </section>
  );
}
