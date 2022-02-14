import React, { useState } from "react";
import { Link } from "react-router-dom";
import slikaLoga from '../assets/pesalogo.jpg'
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
        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="bars" class="svg-inline--fa fa-bars fa-w-14 fa-2x text-white sm:hidden" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
          <path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path>
        </svg>
      </button>
      <a href="/contact">
        <button class="bg-transparent uppercase hidden sm:flex ml-10 md:ml-0 text-white px-4 py-2 border border-white hover:border-transparent hover:bg-lightblue font-bold transition duration-500  z-10">Javite nam se</button>
      </a>
      </nav>
      );
}

export default Navbar;
