import React from "react";

import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";

import Destinations from "../db.json";
import DestinationComponent from "./DestinationComponent";

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
        {Destinations.map(item => (
          <Link to={`/${item.slug}`}>
          <DestinationComponent key={item.id} mapItem={item}/></Link>
        ))}
      </div>
    </>
  );
}

export default DestinationsList;
