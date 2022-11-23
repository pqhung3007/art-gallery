import { useContext, useEffect } from "react";
import SliderContext from "../context/SliderContext";
import LightBoxContext from "../context/LightBoxContext";

function LightBox() {
  const { sliders, currentIndex } = useContext(SliderContext);
  const { setIsLightBoxOpen } = useContext(LightBoxContext);

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/80 h-screen z-10">
      <div className="relative px-6">
        <button
          className="absolute -top-8 right-6 bg-transparent text-white uppercase tracking-widest text-xs font-serif"
          onClick={() => setIsLightBoxOpen(false)}
        >
          close
        </button>

        <img src={sliders[currentIndex].images.gallery} alt="" />
      </div>
    </div>
  );
}

export default LightBox;
