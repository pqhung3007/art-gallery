import { Link } from "react-router-dom";
import logo from "../assets/logo.svg";

function Header() {
  return (
    <nav className="flex justify-between items-center h-20 max-w-7xl mx-auto p-4">
      <Link to="/">
        <img src={logo} alt="logo" className="cursor-pointer" />
      </Link>
      <Link to="/slideshow">
        <p className="uppercase font-serif text-sm text-gray-500 tracking-wider hover:text-gray-800">
          Start slideshow
        </p>
      </Link>
    </nav>
  );
}

export default Header;
