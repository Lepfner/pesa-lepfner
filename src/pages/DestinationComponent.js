import React from "react";
import bus1 from "../assets/busevi/AM_00777 copy.jpg";
import bus2 from "../assets/busevi/AM_00826 copy.jpg";
import bus3 from "../assets/busevi/AM_00858 copy.jpg";
import brod1 from '../assets/20200810_113107.JPG';
import brod2 from '../assets/20200810_102904.JPG';
import brod3 from '../assets/20200810_104859.JPG';
import brod4 from '../assets/20200724_130659.JPG';
import brod5 from '../assets/20190712_074155.JPG';

import Icon from "./Icon";

function Destination({ mapItem }) {
  console.log(mapItem.isLand, mapItem.bus);
  const busevi = [bus1, bus2, bus3];
  const brodovi = [brod1, brod2, brod3, brod4, brod5];

  return (
    <>
      <div className="p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
        <img
          src={mapItem.isLand ? busevi[mapItem.id - 1] : brodovi[mapItem.id - 1]}
          alt=""
          className="h-96 md:h-64 max-h-96 w-full"
        />
        <Icon type={mapItem.type} />
        <div class="p-4 pb-8 bg-white">
          <h1 class="mt-4 font-bold text-2xl text-ocean">{mapItem.name}</h1>
          <p
            style={{
              overflow: "hidden",
              textOverflow: "ellipsis",
              display: "-webkit-box",
              WebkitBoxOrient: "vertical",
              WebkitLineClamp: 1,
            }}
            className="text-ocean"
          >
          <p className="text-xl">{mapItem.description}</p>
          </p>
        </div>
      </div>
    </>
  );
}

export default Destination;
