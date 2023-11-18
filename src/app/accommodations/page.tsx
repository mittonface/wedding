"use client";

import { Divider } from "../divider";
import { Hotel } from "./hotel";

export default function Accommodations() {
  return (
    <section className="py-10 bg-gray-50 sm:py-16 lg:py-24">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Accommodations
          </h2>
          <p className="max-w-xl mx-auto mt-4 text-base leading-relaxed text-gray-600"></p>

          <div>
            For the convenience of family members traveling from outside
            Charlottetown, a block of rooms has been reserved at the Arts Hotel
            in downtown Charlottetown. Please call (902) 370-2787 to book. Let
            them know that you're booking for the Compagnon/Mitton wedding.
            <Hotel
              hotelName="The Arts Hotel"
              description="Funky accommodations, artsy vibes, and just an elevator ride away from the live music action at Trailside Music Hall. "
              address="155 Kent St, Charlottetown"
              website="https://www.theartshotel.ca/en/"
              img="https://res.cloudinary.com/dii1nnhpp/image/upload/v1700337435/wedding/arts_hotel_rtrebc.png"
            ></Hotel>
          </div>

          <Divider />

          <div>
            Below is a list of recommended hotels in downtown Charlottetown,
            across various price points, to get you started. Fox Meadow is just
            on the other side of the Stratford bridge, making it a short 10-15
            minute drive from any of these locations.
            <Hotel
              hotelName="The Great George"
              description="A unique cluster of lovingly restored, 4.5-star heritage buildings situated within Charlottetown's National Historic District."
              address="58 Great George St, Charlottetown"
              website="https://thegreatgeorge.com/"
              img="https://res.cloudinary.com/dii1nnhpp/image/upload/v1700337570/wedding/great-george_ahzwdm.png"
            ></Hotel>
            <Hotel
              hotelName="Delta Hotel"
              description="Close to the scenic harbor and features easy access to area attractions along with spacious accommodations, modern amenities and an on-site gourmet restaurant."
              address="18 Queen St, Charlottetown"
              website="https://www.marriott.com/en-us/hotels/yygdp-delta-hotels-prince-edward/overview/"
              img="https://res.cloudinary.com/dii1nnhpp/image/upload/v1700337655/wedding/delta_mfcmie.png"
            ></Hotel>
            <Hotel
              hotelName="Charlottetown Inn & Conference Centre"
              description="A more affordable option. Stays include a free buffet breakfast."
              address="238 Grafton St, Charlottetown"
              website="https://www.charlottetowninn.com/"
              img="https://res.cloudinary.com/dii1nnhpp/image/upload/v1700337736/wedding/charlottetown-conference_aendvy.png"
            ></Hotel>
            <Hotel
              hotelName="Rodd Charlottetown"
              description="This elegant hotel in Charlottetown built in 1931 features marble floors and vaulted ceilings. Charlottetown Harbor can be seen from the rooftop garden."
              address="75 Kent St, Charlottetown"
              website="https://roddvacations.com/hotels/rodd-charlottetown/"
              img="https://res.cloudinary.com/dii1nnhpp/image/upload/v1700337810/wedding/rodd_tjgoqn.png"
            ></Hotel>
            <Hotel
              hotelName="Fairholm Boutique Inns"
              description="Fairholm Boutique Inns, a five-star National Historic property in Charlottetown, Prince Edward Island, features 33 uniquely decorated suites in four restored heritage buildings."
              address="181 Fitzroy St, Charlottetown"
              website="https://www.fairholminn.com/"
              img="https://res.cloudinary.com/dii1nnhpp/image/upload/v1700337913/wedding/fairholm_dbzl0n.png"
            ></Hotel>
          </div>
        </div>
      </div>
    </section>
  );
}
