import { Hero } from "./hero";
import { useState } from "react";
import Countdown from "react-countdown";

export default function Home() {
  return (
    <>
      <div className="py-10">
        <Hero />
      </div>
    </>
  );
}
