//React components
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import parse from 'html-react-parser';
//Data
import Data from '../Data/construction.json';
//Import slika za radove
import const1 from '../assets/construction/1.jpg';
import const2 from '../assets/construction/2.jpg';

function Construction() {

    useEffect(() => {
        document.getElementById("footer").style.backgroundColor = "#876A42"
    });

    const slike = [const1, const2];

    const location = useLocation();
    const path = location.pathname.slice(15);

    console.log(path);
    return (
        <div>
            {Data.filter(name => name.slug === `${path}`).map(filteredName => (

                <div>
                    <div style={{ backgroundColor: '#a17e50' }} className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4">
                        <h1 className="text-ocean ml-20 xl:ml-0 text-5xl uppercase font-bold">{filteredName.name}</h1>
                    </div>
                    <section className="flex flex-col xl:flex-row mt-8 px-24 my-12">
                        <div className="w-full xl:w-1/2 flex flex-col justify-center">
                            <h2 className=" text-ocean text-3xl xl:text-xl font-light mb-4">
                                {parse(filteredName.description)}
                            </h2>
                            <Link to="/contact">
                                <button onClick={localStorage.setItem('current', `${filteredName.name}`)} className="bg-ocean text-4xl h-28 xl:h-16 xl:text-lg text-white px-4 w-full xl:w-1/2 self-center mt-5 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                                    Rezervirajte!
                                </button>
                            </Link>
                        </div>
                        <div className="w-full xl:w-1/2 mt-10 xl:mt-0">
                            <div className="flex justify-center">
                                <img
                                    src={slike[filteredName.id - 1]}
                                    alt=""
                                    className="h-96 md:h-64 max-h-96 w-full sm:w-3/4"
                                />
                            </div>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    )
}

export default Construction;