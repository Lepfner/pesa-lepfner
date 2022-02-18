//React
import React, { useEffect } from "react";
//Import slika za radove

//Ikona za destinacije
import Icon from "./Icon";

function Construction({ mapItem }) {

  useEffect(() => {
    document.getElementById("footer").style.backgroundColor = "#ddebe9";
  });

  return (
    <>
      <div className="p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
        <img
          src="https://www.poslovni.hr/wp-content/uploads/2020/02/6b0aea41fb9f22777c0aac7878a30248-1600x1000.jpg"
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

export default Construction;
