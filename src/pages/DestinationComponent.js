//React
import React, { useEffect } from "react";
//Import slika za destinacije i transfere
import bus1 from "../assets/busevi/AM_00777 copy.jpg";
import bus2 from "../assets/busevi/AM_00826 copy.jpg";
import bus3 from "../assets/busevi/AM_00858 copy.jpg";
import sea1 from '../assets/sea/1.jpg';
import sea2 from '../assets/sea/2.jpg';
import sea3 from '../assets/brodovi/20200810_113107.JPG';
import sea4 from '../assets/sea/3.jpg';
import sea5 from '../assets/sea/4.jpg';
//Ikona za destinacije
import Icon from "./Icon";

function Destination({ mapItem }) {

  useEffect(() => {
    document.getElementById("footer").style.backgroundColor = "#ddebe9";
  });
  
  const busevi = [bus1, bus2, bus3];
  const brodovi = [sea1, sea2, sea3, sea4, sea5];

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
