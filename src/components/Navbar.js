//React & components
import React from "react";
import { Link } from "react-router-dom";
import Translate from "./Translate";
//CSS
import "../styles.css";
//Icons & pictures
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import logo from '../assets/media/pesa logo.jpg'

function Navbar() {

  function openOverlay() {
    document.getElementById("overlay").classList.replace("w-0", "w-full");
    document.getElementById("menulist").classList.replace("hidden", "flex");
    document.getElementById("close").classList.replace("hidden", "fixed");
  }

  function closeOverlay() {
    document.getElementById("overlay").classList.replace("w-full", "w-0");
    document.getElementById("menulist").classList.replace("flex", "hidden");
    document.getElementById("close").classList.replace("fixed", "hidden");
  }

  return (
    <>
      <nav id="navbar" className="flex lg:justify-between text-md sm:text-md h-24 sm:h-20 py-4 px-10 bg-black w-full bg-opacity-60 absolute top-0 left-0 right-0 items-center z-40">
        <img className="w-52 text-white lg:ml-2" alt="" src={logo} />
        <ul className="lg:flex hidden space-x-6 ml-10 text-white text-bold items-center">
          <li>
            <Link to="/"><p className="link">NASLOVNICA</p></Link>
          </li>
          <li>
            <Link to="/destinations"><p className="link">DESTINACIJE</p></Link>
          </li>
          <li>
            <Link to="/construction-list"><p className="link">GRADILIŠTE
            </p></Link>
          </li>
          <li>
            <Link to="/about"><p className="link">O NAMA</p></Link>
          </li>
          <li>
            <Link to="/partners"><p className="link">NAŠI PARTNERI</p></Link>
          </li>
          <li>
            <Translate/>
          </li>
        </ul>
        <button onClick={openOverlay} id="open" className="ml-auto"><FontAwesomeIcon icon={faBars} size="2x" className="text-white lg:hidden" /></button>
        <div>
          <Link to="/contact">
            <button className="bg-transparent uppercase hidden lg:flex ml-10 md:ml-0 text-white px-4 py-2 border border-white hover:border-transparent hover:bg-lightblue font-bold transition duration-500  z-10">
              Javite nam se
            </button>
          </Link>
        </div>

      </nav>
      <div id="overlay" className="h-full w-0 bg-lightblue fixed top-0 left-0 z-50">
        <ul id="menulist" className="flex-col hidden space-x-8 my-auto mt-96 text-black text-bold items-center">
          <li>
            <Link to="/" onClick={closeOverlay}><p class="link m-8 text-5xl">HOME</p></Link>
          </li>
          <li>
            <Link to="/destinations" onClick={closeOverlay}><p class="link m-8 text-5xl">DESTINATIONS</p></Link>
          </li>
          <li>
            <Link to="/construction-list" onClick={closeOverlay}><p class="link m-8 text-5xl">CONSTRUCTIONS</p></Link>
          </li>
          <li>
            <Link to="/about"><p class="link m-8 text-5xl" onClick={closeOverlay}>ABOUT</p></Link>
          </li>
          <li>
            <Link to="/contact"><p class="link m-8 text-5xl" onClick={closeOverlay}>CONTACT</p></Link>
          </li>
          <li>
            <Link to="/partners"><p class="link m-8 text-5xl" onClick={closeOverlay}>NAŠI PARTNERI</p></Link>
          </li>
        </ul>
        <button onClick={closeOverlay} className=""><FontAwesomeIcon icon={faTimes} id="close" size="3x" className="text-black hidden top-4 right-6" /></button>
      </div>
    </>
  );
}

export default Navbar;
