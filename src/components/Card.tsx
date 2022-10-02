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
      <article className="max-w-7xl mx-auto px-6 md:px-20 pt-8 font-serif">
        <div className="relative mb-40 w-full">
          <picture>
            <source media="(min-width: 480px)" srcSet={images.hero.large} />
            <img src={images.hero.small} alt="" className="w-full md:w-3/4" />
          </picture>
          <div className="gallery-image bg-white p-6 md:p-12 absolute md:-top-8 md:-right-8 w-3/4">
            <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6">
              {name}
            </h1>
            <p className="text-lg text-gray-500">{artist.name}</p>
          </div>

          <div className="">
            <img
              src={artist.image}
              alt=""
              className="w-20 h-20 md:w-32 md:h-32 absolute -bottom-24 md:bottom-1/2 md:left-[35rem]"
            />
          </div>
        </div>

        <div className="relative mb-12">
          <p className="text-gray-500 font-bold z-20 leading-8">
            {description}
          </p>
          <small className="absolute -top-16 md:-top-24 right-0 md:left-0 z-10 text-8xl md:text-[12rem] text-gray-500/10 font-bold">
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
