import React, { useContext } from "react";
import BackButton from "../assets/icon-back-button.svg";
import NextButton from "../assets/icon-next-button.svg";
import SliderContext from "../context/SliderContext";

function Footer() {
  const { currentIndex, sliders, setCurrentIndex } = useContext(SliderContext);
  const { name, artist } = sliders[currentIndex];

  const progressBarWidth = {
    width: Math.round(((currentIndex + 1) / sliders.length) * 100) + "%",
  };

  const movePrev = () => {
    setCurrentIndex((currentIndex - 1 + sliders.length) % sliders.length);
  };

  const moveNext = () => {
    setCurrentIndex((currentIndex + 1) % sliders.length);
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
