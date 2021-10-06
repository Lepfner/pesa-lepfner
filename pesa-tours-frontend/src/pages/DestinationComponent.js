import React from "react";

import MetaTags from "react-meta-tags";

import Footer from "../components/Footer";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip} from '@fortawesome/free-solid-svg-icons';

function Destination({mapItem}) {
  return (
    <>
          <div className=" p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
              <img
                  src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
                  alt=""
              />
              <FontAwesomeIcon icon={faShip} color="white" className="h-6 absolute top-8 left-8"/>
              <div class="p-4 bg-white">
                  <h1 class="mt-4 font-bold text-2xl text-ocean">{mapItem.name}</h1>
                  <p className="text-ocean">
                      {mapItem.description}
                  </p>
              </div>
          </div>
    </>
  );
}

export default Destination;