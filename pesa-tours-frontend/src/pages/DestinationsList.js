import React from "react";

import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

function DestinationsList() {
  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || Destination list</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-skin">
        <h1 className="text-ocean text-5xl uppercase font-bold">Destinations</h1>
      </div>
      <div className="md:px-24 px-8 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lightblue">
        <div class=" p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div class="p-4 bg-white">
            <h1 class="mt-4 font-bold text-2xl text-ocean">Destination name</h1>
            <p className="text-ocean">
              Lorem ipsum dolor sit amet pogl amor litir
            </p>
          </div>
        </div>
        <div class="p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div class="p-4 bg-white">
            <h1 class="mt-4 font-bold text-2xl text-ocean">Destination name</h1>
            <p className="text-ocean">
              Lorem ipsum dolor sit amet pogl amor litir
            </p>
          </div>
        </div>
        <div class="p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
          <img
            src="https://images.unsplash.com/photo-1463320898484-cdee8141c787?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80"
            alt=""
          />
          <div class="p-4 bg-white">
            <h1 class="mt-4 font-bold text-2xl text-ocean">Destination name</h1>
            <p className="text-ocean">
              Lorem ipsum dolor sit amet pogl amor litir
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default DestinationsList;
