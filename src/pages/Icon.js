//React
import React from 'react'
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faLandmark, faHammer } from '@fortawesome/free-solid-svg-icons';

function Icon({ type }) {
    switch (type) {
        case "sea":
            return <FontAwesomeIcon icon={faShip} color="white" className="h-6 absolute top-8 left-8" />
        case "land":
            return <div className="absolute top-5 left-5 bg-white h-10 w-10 flex justify-center items-center">
                <FontAwesomeIcon icon={faLandmark} />
            </div>
        case "construction":
            return <div className="absolute top-5 left-5 bg-white h-10 w-10 flex justify-center items-center">
                <FontAwesomeIcon icon={faHammer} />
            </div>
        default:
            console.log(`Icon error! Missing icon!`);
            break;
    }
}

export default Icon
