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
        <h1>
          We've heard from all of you! If you need to change anything about your
          RSVP feel free to reach out to us and let us know.
        </h1>
      </div>
    </div>
  );
}
