import Image from "next/image";

export const Timeline = () => {
  return (
    <div className="container flex flex-col px-6 mx-auto space-y-6 lg:h-[16rem] lg:flex-col text-center">
      <div>
        <h1 className="text-3xl font-bold tracking-wide lg:text-3xl uppercase">
          Timeline
        </h1>
      </div>
      <div>
        <ul>
          <li>4:30pm - Ceremony</li>
          <li>4:45pm - Family Photos</li>
          <li>5:00pm - Cocktail Hour</li>
          <li>6:00pm - Reception Begins</li>
          <li>6:30pm - Dinner Served</li>
          <li>8:30pm - Dance Begins</li>
        </ul>
      </div>
    </div>
  );
};
