//React
import React from 'react'
//Icons
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faLandmark } from '@fortawesome/free-solid-svg-icons';

function Icon({ type }) {
    if (type === "sea") {
        return <FontAwesomeIcon icon={faShip} color="white" className="h-6 absolute top-8 left-8" />
    } else {
        return <div className="absolute top-5 left-5 bg-white h-10 w-10 flex justify-center items-center">
            <FontAwesomeIcon icon={faLandmark} />
        </div>
    }
}

export default Icon
