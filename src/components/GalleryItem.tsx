import { useContext } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Painting } from "../model/painting";
import SliderContext from "../context/SliderContext";
import { captionAnimation } from "../util/animation";

const GalleryItem = ({ id, images, name, artist }: Painting) => {
  const { setCurrentIndex } = useContext(SliderContext);

  return (
    /* use CR since id might be undefined <type> */
    <Link to="/slideshow" onClick={() => setCurrentIndex(id ? id : 0)}>
      <div className="relative overflow-hidden">
        <img
          src={images.thumbnail}
          alt=""
          className="w-full h-auto hover:scale-105 duration-200"
        />
        <motion.div
          className="absolute bottom-0 px-4 py-2 w-full bg-black/10"
          variants={captionAnimation}
        >
          <h2 className="font-serif font-bold text-white text-xl">{name}</h2>
          <p className="font-serif text-slate-100 text-sm">{artist.name}</p>
        </motion.div>
      </div>
    </Link>
  );
};

export default GalleryItem;
