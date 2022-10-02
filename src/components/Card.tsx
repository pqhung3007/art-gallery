import { Painting } from "../model/painting";
import data from "../data/data.json";
import { useState } from "react";
import BackButton from "../assets/icon-back-button.svg";
import NextButton from "../assets/icon-next-button.svg";

type IProp = {
  painting: Painting;
};
const Card = () => {
  const [item, setItem] = useState(data);
  const [value, setValue] = useState(0);

  const { name, images, artist, year, description, source } = item[value];
  return (
    <>
      <article className="max-w-7xl mx-auto px-6 pt-8 font-serif">
        <div className="relative mb-40">
          <img src={images.hero.small} alt="painting" />
          <div className="bg-white p-6 absolute -bottom-8 w-96 max-w-lg">
            <h1 className="text-2xl font-bold mb-2">{name}</h1>
            <p className="text-lg text-gray-500">{artist.name}</p>
          </div>

          <div className="absolute -bottom-24 left-6">
            <img src={artist.image} alt="" className="w-20 h-20" />
          </div>
        </div>

        <div className="relative mb-12">
          <p className="text-gray-500 font-bold z-20 leading-7">
            {description}
          </p>
          <small className="absolute -top-16 right-0 z-10 text-8xl text-gray-500/10 font-bold">
            {year}
          </small>
        </div>

        <a
          href={source}
          className="uppercase tracking-wide text-gray-500 text-xs underline decoration-gray-500"
        >
          go to source
        </a>
      </article>

      <div className="flex justify-between items-center mt-32 pb-8 max-w-7xl mx-auto px-6 font-serif">
        <div className="space-y-4">
          <h3 className="text-md font-bold mb-2">{name}</h3>
          <p className="text-xs text-gray-500">{artist.name}</p>
        </div>

        <div className="flex space-x-6">
          <img
            src={BackButton}
            alt=""
            onClick={() => setValue((cur) => cur - 1)}
            className="cursor-pointer"
          />
          <img
            src={NextButton}
            alt=""
            onClick={() => setValue((cur) => cur + 1)}
            className="cursor-pointer"
          />
        </div>
      </div>
    </>
  );
};

export default Card;
