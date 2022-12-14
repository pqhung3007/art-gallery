import { useEffect, useContext } from "react";
import { motion } from "framer-motion";
import { slideAnimation } from "../util/animation";
import LightBox from "./LightBox";
import SliderContext from "../context/SliderContext";
import LightBoxContext from "../context/LightBoxContext";

function Card() {
  const { sliders, currentIndex } = useContext(SliderContext);
  const { isLightBoxOpen, setIsLightBoxOpen } = useContext(LightBoxContext);

  useEffect(() => {
    isLightBoxOpen
      ? (document.body.style.overflowY = "hidden")
      : (document.body.style.overflowY = "auto");
  }, [isLightBoxOpen]);

  const { name, images, artist, year, description, source } =
    sliders[currentIndex];

  return (
    <motion.article
      key={currentIndex}
      className="block lg:flex items-center max-w-7xl mx-auto px-6 md:px-20 lg:px-6 pt-8 md:pt-16 font-serif"
      variants={slideAnimation}
      initial="enter"
      animate="center"
      exit="exit"
      transition={{
        duration: 0.8,
        ease: "easeInOut",
      }}
    >
      <div className="relative mb-40 w-full">
        <picture>
          <source media="(min-width: 480px)" srcSet={images.hero.large} />
          <img src={images.hero.small} alt="" className="w-full md:w-3/4" />
        </picture>
        <div className="gallery-image bg-white p-6 md:p-12 absolute md:-top-8 md:-right-12 lg:-right-32 w-3/4">
          <h1 className="text-2xl md:text-5xl font-bold mb-2 md:mb-6">
            {name}
          </h1>
          <p className="text-lg text-gray-500">{artist.name}</p>
        </div>

        <button
          className="view-btn absolute md:bottom-4 left-4 bg-black/60 p-4 text-white hover:text-black hover:bg-white/60 duration-150 uppercase text-xs tracking-widest"
          onClick={() => setIsLightBoxOpen(true)}
        >
          view image
        </button>

        <img
          src={artist.image}
          alt=""
          className="w-20 h-20 md:w-32 md:h-32 absolute -bottom-24 md:bottom-1/2 lg:-bottom-8 md:left-[35rem] lg:left-[80%]"
        />
      </div>

      <div className="relative">
        <p className="text-gray-500 font-bold z-20 leading-8 lg:w-72">
          {description}
        </p>
        <small className="absolute -top-16 md:-top-24 right-0 md:left-0 z-10 text-8xl md:text-[12rem] lg:text-[8rem] text-gray-500/10 font-bold">
          {year}
        </small>

        <a
          href={source}
          className="inline-block mt-8 uppercase tracking-wide text-gray-500 text-xs underline decoration-gray-500"
        >
          go to source
        </a>
      </div>

      {isLightBoxOpen ? <LightBox /> : null}
    </motion.article>
  );
}

export default Card;
