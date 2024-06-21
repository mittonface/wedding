import Image from "next/image";

export const Hero = () => {
  return (
    <div className="container flex flex-col px-6 py-10 mx-auto space-y-6 lg:h-[32rem] lg:py-16 lg:flex-row lg:items-center">
      <div className="w-full lg:w-1/2">
        <div className="lg:max-w-lg">
          <h1 className="text-3xl font-bold tracking-wide lg:text-5xl uppercase">
            Thanks for RSVP'ing!
          </h1>

          <div className="mt-8 space-y-5">
            <p className="flex items-center -mx-2 mx-2 text-lg">
              Let us know if you need to change anything about your RSVP and
              we'll try to accomodate as best as possible. Can't wait to
              celebrate with you!
            </p>

            <p className="-mx-2 mx-2 text-lg">
              Feel free to check back here to see if we've updated anything, or
              shoot us an email at{" "}
              <a
                href="mailto:wedding@jessandbrent.ca"
                style={{ textDecoration: "underline" }}
              >
                wedding@jessandbrent.ca
              </a>{" "}
              if you have any burning questions.
            </p>
          </div>
        </div>
      </div>

      <div className="flex items-center justify-center w-full h-96 lg:w-1/2">
        {" "}
        <Image
          alt="Jess and Brent being cute next to some water"
          className="h-auto max-w-full rounded-lg"
          style={{ transform: "translate3d(0, 0, 0)" }}
          src={
            "https://res.cloudinary.com/dii1nnhpp/image/upload/v1694197663/wedding/pinheys_point_engagement_jessicac-59_duacxu.jpg"
          }
          width={1470}
          height={980}
          loading="lazy"
        />
      </div>
    </div>
  );
};
