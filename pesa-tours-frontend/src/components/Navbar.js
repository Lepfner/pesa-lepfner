import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function Navbar() {
  return (
    <nav id="navbar" className="flex sm:justify-between text-lg sm:text-md py-4 px-24 bg-black w-full bg-opacity-60 absolute top-0 left-0 right-0 items-center z-40">
      <h2 className="">PEŠA TOURS</h2>
      <ul className="flex space-x-8 text-white text-bold items-center">
        <li>
          <Link to="/"><p class="link">HOME</p></Link>
        </li>
        <li>
          <Link to="/destinations"><p class="link">DESTINATIONS</p></Link>
        </li>
        <li>
          <Link to="/construction-list"><p class="link">CONSTRUCTIONS</p></Link>
        </li>
        <li>
          <Link to="/about"><p class="link">ABOUT</p></Link>
        </li>
        <li>
          <Link to="/contact"><p class="link">CONTACT</p></Link>
        </li>
      </ul>
      <Link to="/contact">
        <button className="bg-transparent ml-10 md:ml-0 text-white px-4 py-2 border border-white hover:border-transparent hover:bg-lightblue font-bold transition duration-500 uppercase z-10">
          GET IN TOUCH
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
