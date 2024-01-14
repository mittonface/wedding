"use client";

import { FormEvent, useState } from "react";

export default function RSVP() {
  const [code, setCode] = useState<string>("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Redirect to /rsvp/<code>
    window.location.href = `/rsvp/${code}`;
  };

  return (
    <div className="flex items-center min-h-screen flex-col">
      <div className="p-5">
        Please input the code that we sent with your RSVP to let us know if we
        can expect you!
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <div className="w-72">
            <div className="relative w-full min-w-[200px] h-10 mb-3">
              <label
                htmlFor="rsvp-code"
                className="block mb-2 text-sm font-medium text-gray-900"
              >
                RSVP Code
              </label>

              <input
                className="block w-full p-4 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 sm:text-md focus:ring-blue-500 focus:border-blue-500 "
                id="rsvp-code"
                placeholder=""
                maxLength={4}
                onChange={(event) => {
                  event.target.value = event.target.value.toUpperCase();
                  setCode(event.target.value);
                }}
              />

              <button
                type="submit"
                className="w-full h-8 bg-green-500 text-white rounded-md"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
