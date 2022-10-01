import { useEffect } from "react";
import Macy from "macy";
import data from "../data/data.json";
import GalleryItem from "./GalleryItem";

const macyOptions = {
  container: "#gallery-grid",
  trueOrder: true,
  mobileFirst: true,
  margin: 24,
  columns: 1,
  breakAt: {
    1000: 4,
    650: {
      margin: 40,
      columns: 2,
    },
  },
};

function GalleryGrid() {
  useEffect(() => {
    new Macy(macyOptions);
  }, []);

  return (
    <main id="gallery-grid" className="max-w-7xl mx-auto">
      {data.map((painting) => (
        <GalleryItem key={painting.name} {...painting} />
      ))}
    </main>
  );
}

export default GalleryGrid;
