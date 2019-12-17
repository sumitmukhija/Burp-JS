import React from 'react';
import Map from 'pigeon-maps';
// import Overlay from 'pigeon-overlay';
// import overlayImage from "./gps.png";

const MapComponent = (props) => {
    return (
        <Map center={props.center} zoom={props.zoom}>
            {/* <Overlay anchor={[23.2599, 77.4126]} offset={[120, 79]}>
                <img src={overlayImage} alt='' />
            </Overlay> */}
        </Map>
    );
}

MapComponent.defaultProps = {
    center: [23.2599, 77.4126], 
    zoom: 14
};

export default MapComponent;