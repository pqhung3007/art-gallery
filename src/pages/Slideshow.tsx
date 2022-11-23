import { useEffect, useContext } from "react";
import Card from "../components/Card";
import Footer from "../components/Footer";
import SliderContext from "../context/SliderContext";

function Slideshow() {
  const { isSlideshowPlaying, currentIndex, setCurrentIndex, sliders } =
    useContext(SliderContext);

  useEffect(() => {
    const interval = setInterval(() => {
      isSlideshowPlaying &&
        setCurrentIndex((currentIndex + 1) % sliders.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isSlideshowPlaying, currentIndex, sliders, setCurrentIndex]);

  return (
    <>
      <Card />
      <Footer />
    </>
  );
}

export default Slideshow;
