import React, { useState, useEffect, useContext } from "react";
import BackButton from "../assets/icon-back-button.svg";
import NextButton from "../assets/icon-next-button.svg";
import SliderContext from "../context/SliderContext";

function Footer() {
  const [width, setWidth] = useState(0);
  const { currentIndex, sliders, setCurrentIndex } = useContext(SliderContext);

  useEffect(() => {
    setWidth(Math.floor((currentIndex / sliders.length) * 100));
  }, [currentIndex, sliders]);

  const progressBarWidth = {
    width: width + "%",
  };

  const { name, artist } = sliders[currentIndex];

  const movePrev = () => {
    setCurrentIndex((prevState) => prevState - 1);
  };

  const moveNext = () => {
    setCurrentIndex((prevState) => prevState + 1);
  };

  return (
    <div className=" max-w-7xl mx-auto px-6 mt-8">
      <div className="w-full h-1 bg-slate-100 relative">
        <span className="block h-full bg-black" style={progressBarWidth}></span>
      </div>

      <div className="flex justify-between items-center mt-4 pb-8 font-serif">
        <div className="space-y-4">
          <h3 className="text-lg font-bold mb-2">{name}</h3>
          <p className="text-xs text-gray-500">{artist.name}</p>
        </div>

        <div className="flex space-x-6">
          <img
            src={BackButton}
            alt=""
            onClick={movePrev}
            className="cursor-pointer"
          />
          <img
            src={NextButton}
            alt=""
            onClick={moveNext}
            className="cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
}

export default Footer;
