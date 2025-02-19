import React from "react";

import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import Land from '../data.json';
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
      <div className="flex flex-col justify-end w-full min-h-half px-10 md:px-24 py-4 bg-lightblue">
        <h1 className="text-ocean text-5xl uppercase font-bold ml-4">Destinacije</h1>
      </div>
      <div className="md:px-24 px-8 py-24 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lightblue">
        {Destinations.map(item => (
          <Link to={`/destinations/:${item.slug}`}>
          <DestinationComponent key={item.id} mapItem={item}/></Link>
        ))}
      </div>
           <div className="flex flex-col justify-end w-full ">
        <h1 className="text-ocean text-5xl uppercase font-bold pl-28 py-4 bg-lightblue">Transferi</h1>
      </div>
      <div className="md:px-24 px-8 py-24 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lightblue">
        {Land.map(item => (
          <Link to={`/destinations/:${item.slug}`}>
          <DestinationComponent isLanding={item.isLand} key={item.id} mapItem={item}/></Link>
        ))}
      </div>
    </>
  );
}

export default DestinationsList;
