import { useEffect } from "react";
import Macy from "macy";
import { motion } from "framer-motion";
import data from "../data/data.json";
import GalleryItem from "../components/GalleryItem";
import { pageAnimation } from "../util/animation";

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

  return (
    <main className="max-w-7xl mx-auto mt-8 px-4">
      <motion.div
        id="gallery-grid"
        variants={pageAnimation}
        initial="hide"
        animate="show"
      >
        {data.map((painting) => (
          <GalleryItem key={painting.name} {...painting} />
        ))}
      </motion.div>
    </main>
  );
}

export default Gallery;
