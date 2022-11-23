import { useContext } from "react";
import { Link } from "react-router-dom";
import SliderContext from "../context/SliderContext";
import logo from "../assets/logo.svg";

function Header() {
  const { isSlideshowPlaying, setIsSlideshowPlaying } =
    useContext(SliderContext);
  return (
    <nav className="flex justify-between items-center h-20 p-4 shadow-md">
      <Link to="/">
        <img src={logo} alt="logo" className="cursor-pointer" />
      </Link>
      <Link
        to="/slideshow"
        onClick={() => setIsSlideshowPlaying((prevState) => !prevState)}
      >
        <p className="uppercase font-serif text-sm text-gray-500 tracking-wider hover:text-gray-800">
          {isSlideshowPlaying ? "stop slideshow" : "start slideshow"}
        </p>
      </Link>
    </nav>
  );
}

export default Header;
