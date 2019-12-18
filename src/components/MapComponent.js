import React from 'react';
import Map from 'pigeon-maps';
import image from "../../public/images/placeholder.png"

const MapComponent = (props) => {
    return(<Map center={props.location} zoom={props.zoom}></Map>)
        
}

MapComponent.defaultProps = {
    location: [23.2599, 77.4126], 
    zoom: 14
};

export default MapComponent;