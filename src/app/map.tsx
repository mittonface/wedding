"use client";
export const Map = () => {
  return (
    <section className="">
      <div className="container px-6 py-12 mx-auto">
        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              width="900"
              height="400"
              frameBorder="0"
              title="map"
              marginHeight={0}
              marginWidth={0}
              scrolling="no"
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBHgfBsOi9OBULuTjNMAWFMzswjVMcUpVs
              &q=Fox+Meadow+Golf+Course,Stratford+PE&zoom=12"
            ></iframe>
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1 items-center">
            <div>
              <h2 className="mt-4 text-2xl">Fox Meadow Golf Course</h2>
              <p className="mt-2 text-lg">167 Kinlock Road</p>
              <p className="mt-2 text-lg">Stratford, PE</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
