import React from "react";
import { Link } from "react-router-dom";
import { Painting } from "../model/painting";

const GalleryItem: React.FC<Painting> = ({ images, name, artist }) => {
  return (
    <Link to="/">
      <div className="relative overflow-hidden">
        <img
          src={images.thumbnail}
          alt=""
          className="w-full h-auto hover:scale-105 duration-200"
        />
        <div className="absolute bottom-0 px-4 py-2 w-full bg-black/10">
          <h2 className="font-serif font-bold text-white text-xl">{name}</h2>
          <p className="font-serif text-slate-100 text-sm">{artist.name}</p>
        </div>
      </div>
    </Link>
  );
};

export default GalleryItem;
