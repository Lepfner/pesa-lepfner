import React from "react";

import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import Construction from '../constdata.json';
import DestinationComponent from "./DestinationComponent";

function ConstructionList() {

  return (
    <>
      {/* Hero section with meta tags */}
      <MetaTags>
        <title>Peša Tours || Destination list</title>
        <meta name="description" content="Some description." />
        <meta property="og:title" content="Peša Tours" />
        <meta property="og:image" content="path/to/image.jpg" />
      </MetaTags>
      <div class="flex flex-col justify-end w-full min-h-half px-10 md:px-24 py-4 bg-lightblue">
        <h1 class="text-ocean text-5xl uppercase font-bold ml-4">Zemljani radovi</h1>
        <ul>
          <li class="mt-2 text-xl">- Rad s radnim strojem</li>
          <li class="mt-2 text-xl">- Odvoz i dovoz materijala</li>
          <li class="mt-2 text-xl">- Ostali radovi u nisko gradnji</li>
          <li class="mt-2 text-xl">- Radovi u holtikulturi ( uređenje vrtova, i okučnica ) </li>
        </ul>
      </div>
      <div className="md:px-24 px-8 py-24 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lightblue">
        {Construction.map(item => (
          <Link to={`/${item.slug}`}>
            <DestinationComponent key={item.id} mapItem={item} /></Link>
        ))}
      </div>
      <div class="flex flex-col justify-end w-full px-10 md:px-24 py-4 bg-lightblue">
        <h1 class="text-ocean text-5xl uppercase font-bold ml-4">Visokogradnja</h1>
        <ul>
          <li class="mt-2 text-xl">- Izgradnja objekata ( obiteljske kuće, ville urbane, stambene zgrade )</li>
        </ul>
      </div>
      <div className="md:px-24 px-8 py-24 grid w-full grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lightblue">
        {Construction.map(item => (
          <Link to={`/${item.slug}`}>
            <DestinationComponent key={item.id} mapItem={item} /></Link>
        ))}
      </div>
    </>
  );
}

export default ConstructionList;
