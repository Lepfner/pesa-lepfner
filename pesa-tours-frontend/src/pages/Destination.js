import React from 'react';
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';
import Data from '../db.json';
import { SRLWrapper } from "simple-react-lightbox";


function Destinations() {

    const location = useLocation();
    const path = location.pathname.slice(15);
    return (
        <div>
            {Data.filter(name => name.slug === `${path}`).map(filteredName => (
            
                <div>
                    <div className="flex flex-col justify-end w-full min-h-half px-4 md:px-24 py-4 bg-lightblue">
                        <h1 className="text-ocean ml-20 xl:ml-0 text-5xl uppercase font-bold">{filteredName.name}</h1>
                    </div>
                    <section className="flex flex-col xl:flex-row mt-8 px-24 my-12">
                        <div className="w-full xl:w-1/2 flex flex-col justify-center">
                            <h2 className=" text-ocean text-3xl xl:text-xl font-light mb-4">
                                {filteredName.description}
                            </h2>
                            <Link to="/contact">
                            <button onClick={localStorage.setItem('current', `${filteredName.name}`)} className="bg-ocean text-xl xl:text-lg text-white px-4 w-full xl:w-1/2 self-center mt-5 py-2 border border-ocean hover:text-ocean hover:bg-transparent transition duration-500">
                                Rezervirajte!
                            </button>
                            </Link>
                        </div>
                        <div className="w-full xl:w-1/2 mt-10 xl:mt-0">
                        <SRLWrapper>
                          <a  href={filteredName.picture}>
                        <img
                            src={filteredName.picture}
                            alt=""
                            className="w-full pr-0 xl:pr-10 h-auto mx-auto flex self-center ml-0 xl:ml-10"
                        />
                        </a>
                        </SRLWrapper>
                        </div>
                    </section>
                </div>
            ))}
        </div>
    )
}

export default Destinations