import React from "react";

import Icon from "./Icon";

function Destination({mapItem}) {
  return (
    <>
          <div className=" p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
              <img
                  src={mapItem.picture}
                  alt=""
              />
              <Icon type={mapItem.type}/>
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