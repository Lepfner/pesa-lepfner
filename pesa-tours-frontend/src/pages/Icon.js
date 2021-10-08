import React from 'react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShip, faLandmark } from '@fortawesome/free-solid-svg-icons';

function Icon({type}) {
    if(type === "sea"){
        return <FontAwesomeIcon icon={faShip} color="white" className="h-6 absolute top-8 left-8"/>
    } else {
        return <FontAwesomeIcon icon={faLandmark} color="white" className="h-6 absolute top-8 left-8"/>
    }
}

export default Icon
