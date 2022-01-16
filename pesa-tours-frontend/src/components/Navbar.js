import React from "react";
import { Link } from "react-router-dom";
import "../styles.css";
function Navbar() {
  return (
    <nav className="flex justify-between py-4 px-24 bg-white bg-opacity-60 absolute top-0 left-0 right-0 items-center z-40">
      <h2 className="mr-10 sm:mr-0">PEŠA TOURS</h2>
      <ul className="flex space-x-8 text-ocean text-bold items-center">
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
        <button className="bg-transparent text-ocean px-4 py-2 border border-ocean hover:border-transparent hover:bg-skin font-bold transition duration-500 uppercase z-10">
          GET IN TOUCH
        </button>
      </Link>
    </nav>
  );
}

export default Navbar;
