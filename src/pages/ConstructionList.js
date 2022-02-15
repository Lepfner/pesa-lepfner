import React from "react";

import MetaTags from "react-meta-tags";
import { Link } from "react-router-dom";
import Construction from "../constdata.json";
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
      <div style={{backgroundColor:'#a17e50'}} className="flex flex-col justify-end w-full min-h-half px-10 md:px-24 py-4 ">
        <h1 className="text-black text-5xl uppercase font-bold ml-4">
          Zemljani radovi i visokogradnja
        </h1>

      </div>

      <div style={{backgroundColor:'#876a44'}}  className="md:px-24 px-8 py-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 bg-lightblue">
        {Construction.map((item) => (
          <Link to={`/${item.slug}`}>
            <DestinationComponent key={item.id} mapItem={item} />
          </Link>
        ))}
      </div>

    </>
  );
}

export default ConstructionList;
