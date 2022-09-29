import { useEffect } from "react";
import { Link } from "react-router-dom";
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
    <div id="gallery-grid">
      {data.map((painting) => (
        <GalleryItem key={painting.name} {...painting} />
      ))}
    </div>
  );
}

export default GalleryGrid;
