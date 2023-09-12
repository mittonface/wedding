"use client";
import Image from "next/image";
export const Divider = () => {
  return (
    <div className="flex items-center justify-center px-6 py-12 mx-auto mt-2">
      <Image
        alt="Pretty flowers"
        className="h-auto "
        style={{ transform: "translate3d(0, 0, 0)" }}
        src={
          "https://res.cloudinary.com/dii1nnhpp/image/upload/v1694292052/assets/floraldivider_q6lfol.png"
        }
        width={978 / 2}
        height={248}
        loading="lazy"
      />
    </div>
  );
};
