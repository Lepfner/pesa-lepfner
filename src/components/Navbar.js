import React, { useState } from "react";
import { Link } from "react-router-dom";
import slikaLoga from '../assets/pesalogo.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import "../styles.css";


function Navbar() {

  return (
    <nav id="navbar" class="flex justify-between text-lg sm:text-md h-24 sm:h-20 py-4 px-24 bg-black w-full bg-opacity-60 absolute top-0 left-0 right-0 items-center z-40">
      <img class="w-64 text-white " alt="" src={slikaLoga}></img>
      <ul class="sm:flex hidden space-x-8 text-white text-bold items-center">
        <li>
          <a href="/">
            <p class="link">NASLOVNICA</p>
          </a>
        </li>
        <li>
          <a href="/destinations">
            <p class="link">DESTINACIJE</p>
          </a>
        </li>
        <li>
          <a href="/construction-list">
            <p class="link">GRADILIŠTE</p>
          </a></li><li><a href="/about">
            <p class="link">O NAMA</p>
          </a>
        </li>
      </ul>
      <button id="open" class="">
        <FontAwesomeIcon icon={faBars} size="2x" className="h-4 text-white"/>
      </button>
      <a href="/contact">
        <button class="bg-transparent uppercase hidden sm:flex ml-10 md:ml-0 text-white px-4 py-2 border border-white hover:border-transparent hover:bg-lightblue font-bold transition duration-500  z-10">Javite nam se</button>
      </a>
      </nav>
      );
}

export default Navbar;
