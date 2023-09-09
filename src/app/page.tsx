import { Hero } from "./hero";
import { Map } from "./map";
import { useState } from "react";
import Countdown from "react-countdown";

export default function Home() {
  return (
    <>
      <div className="py-10">
        <Hero />
        <Map />
      </div>
    </>
  );
}
