//React components
import React, { useEffect } from "react";
import parse from 'html-react-parser';
//Import slika za radove
import const1 from '../assets/construction/1.jpg';
import const2 from '../assets/construction/2.jpg';
//Ikona za destinacije
import Icon from "./Icon";

function Construction({ mapItem }) {

  const slike = [const1, const2];

  useEffect(() => {
    document.getElementById("footer").style.backgroundColor = "#ddebe9";
  });

  var desc = parse(mapItem.description);

  return (
    <>
      <div className="p-5 rounded-md cursor-pointer overflow-hidden transform hover:scale-105 duration-500 mx-auto">
        <img
          src={slike[mapItem.id - 1]}
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
            <p className="text-xl">{desc}</p>
          </p>
        </div>
      </div>
    </>
  );
}

export default Construction;
