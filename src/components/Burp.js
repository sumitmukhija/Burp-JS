import React from 'react';
import ActionComponent from "./ActionComponent";
import MapComponent from "./MapComponent";
import {getLocation} from "../util/geo_util"

export default class Burp extends React.Component{

    // constructor() {
    //     // localStorage.setItem(JSON.stringify(getLocation()));
    // }

    render() {

        return (
            <div className="container">
                <div className="title">
                
                    <span className="titleText">Burp!</span>
                
            </div>
            <div className="map-container">
                    <div className="map-circle">
                        <MapComponent />
                    </div>
            </div>
                <div className="action-container">
                    <ActionComponent />
                </div>    
            </div>
        );
    }

}