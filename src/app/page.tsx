import { Divider } from "./divider";
import { Hero } from "./hero";
import { Map } from "./map";
import { useState } from "react";
import Countdown from "react-countdown";
import { Timeline } from "./timeline";

export default function Home() {
  return (
    <>
      <div className="py-10">
        <Hero />
        <Divider />
        <Timeline />
        <Divider />
        <Map />
      </div>
    </>
  );
}
