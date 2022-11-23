import { useEffect, useContext } from "react";
import Macy from "macy";
import { motion } from "framer-motion";
import GalleryItem from "../components/GalleryItem";
import { pageAnimation } from "../util/animation";
import SliderContext from "../context/SliderContext";

const macyOptions = {
  container: "#gallery-grid",
  trueOrder: true,
  mobileFirst: true,
  margin: 24,
  columns: 1,
  breakAt: {
    1000: 4,
    650: {
      margin: 30,
      columns: 2,
    },
  },
};

function Gallery() {
  useEffect(() => {
    new Macy(macyOptions);
  }, []);

  const { sliders } = useContext(SliderContext);

  return (
    <main className="max-w-7xl mx-auto mt-8 px-4">
      <motion.div
        id="gallery-grid"
        variants={pageAnimation}
        initial="hide"
        animate="show"
      >
        {sliders.map((painting, index) => (
          <GalleryItem key={painting.name} id={index} {...painting} />
        ))}
      </motion.div>
    </main>
  );
}

export default Gallery;
