"use client";

interface HotelProps {
  hotelName: string;
  description: string;
  address: string;
  website: string;
  img: string;
}
export const Hotel = ({
  hotelName,
  description,
  address,
  website,
  img,
}: HotelProps) => {
  return (
    <div className="max-w-3xl mx-auto mt-8 space-y-3 md:mt-8 h-200">
      <div className="transition-all duration-200 bg-white border border-gray-200 shadow-lg hover:bg-gray-50">
        <div className="flex max-w-3xl mx-auto space-y-3">
          <div className="flex-none w-200">
            <img src={img}></img>
          </div>
          <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-left">
            <span
              className={`text-lg font-semibold text-black hover:text-blue-600`}
            >
              <a href={website}> {hotelName}</a>
            </span>
            <p>
              <em>{address}</em>
            </p>
            <p>{description}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
