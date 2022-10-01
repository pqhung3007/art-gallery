import logo from "../assets/logo.svg";

function Header() {
  return (
    <nav className="flex justify-between items-center h-20 max-w-7xl mx-auto p-4">
      <img src={logo} alt="logo" />
      <button className="uppercase font-serif text-sm text-gray-500 tracking-wider hover:text-gray-800">
        Start slideshow
      </button>
    </nav>
  );
}

export default Header;
