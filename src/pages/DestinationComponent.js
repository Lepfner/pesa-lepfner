import React from "react";
import bus1 from "../assets/busevi/AM_00777 copy.jpg";
import bus2 from "../assets/busevi/AM_00826 copy.jpg";
import bus3 from "../assets/busevi/AM_00858 copy.jpg";

import Icon from "./Icon";

function Destination({ mapItem }) {
  console.log(mapItem.isLand, mapItem.bus);
  const busevi = [bus1, bus2, bus3];

  return (
    <>
      <div className="p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
        <img
          src={mapItem.isLand ? busevi[mapItem.id - 1] : mapItem.picture}
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
