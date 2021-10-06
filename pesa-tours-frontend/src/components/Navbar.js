import React from "react";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-24 bg-transparent absolute top-0 left-0 right-0 items-center z-40">
      <h2>Peša tours</h2>
      <ul className="flex space-x-8 text-ocean text-bold items-center">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/destinations">Destinations</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
      <Link to="/contact">
        <button className="bg-transparent text-white px-4 py-2 border border-white hover:border-transparent hover:bg-skin font-bold transition duration-500 uppercase z-10">
          Get in touch
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
