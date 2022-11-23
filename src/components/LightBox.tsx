import React, { useContext, useEffect, useCallback, useRef } from "react";
import SliderContext from "../context/SliderContext";
import LightBoxContext from "../context/LightBoxContext";

function LightBox() {
  const { sliders, currentIndex } = useContext(SliderContext);
  const { setIsLightBoxOpen } = useContext(LightBoxContext);
  const modalRef = useRef(null);

  /* wrap in useCallback since it's used in dependency array */
  const handleCloseModal = useCallback(
    (e: KeyboardEvent) => {
      if (e.keyCode === 27) {
        setIsLightBoxOpen(false);
      }
    },
    [setIsLightBoxOpen]
  );

  const handleClickOutside = (e: React.MouseEvent<HTMLElement>) => {
    if (modalRef.current === e.target) {
      setIsLightBoxOpen(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleCloseModal);

    return () => {
      window.removeEventListener("keydown", handleCloseModal);
    };
  }, [handleCloseModal]);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/80 h-screen z-10"
      ref={modalRef}
      onClick={handleClickOutside}
    >
      <div className="relative px-6" onClick={(e) => e.stopPropagation()}>
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
