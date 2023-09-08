import cloudinary from "../utils/cloudinary";
import { ImageProps } from "../utils/types";
import Image from "next/image";

function chunkArray(array: ImageProps[], chunkSize: number) {
  let index = 0;
  let arrayLength = array.length;
  let tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    let chunk = array.slice(index, index + chunkSize);
    tempArray.push(chunk);
  }

  return tempArray;
}

export default async function Gallery() {
  const getImages = async () => {
    const results = await cloudinary.v2.search
      .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
      .sort_by("public_id", "desc")
      .max_results(400)
      .execute();
    let reducedResults: ImageProps[] = [];

    let i = 0;
    for (let result of results.resources) {
      reducedResults.push({
        id: i,
        height: result.height,
        width: result.width,
        public_id: result.public_id,
        format: result.format,
      });
      i++;
    }

    return reducedResults;
  };

  const images = await getImages();
  let imageChunks = chunkArray(images, 3);

  const i = 0;

  return (
    <div className="container flex mx-auto flex-stretch justify-center">
      <div className="grid grid-cols-2 md:grid-cols-2 gap-3 lg:w-1/2 items-center">
        {imageChunks.map((chunk, index) => (
          <div key={index} className="grid gap-3">
            {chunk.map(({ id, public_id, format, blurDataUrl }) => (
              <div key={id}>
                <Image
                  alt="Next.js Conf photo"
                  className="h-auto max-w-full rounded-lg"
                  style={{ transform: "translate3d(0, 0, 0)" }}
                  src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720,fl_progressive/${public_id}.${format}`}
                  width={720}
                  height={480}
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
