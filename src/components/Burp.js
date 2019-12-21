import React from 'react';
import ActionComponent from "./ActionComponent";
import MapComponent from "./MapComponent";
import { getLocation } from "../util/geo_util";
import { getListings } from "../util/network_util";

export default class Burp extends React.Component{

    onDecider() {
        // getListings();
    }

    constructor() {
        super();
        this.state = { location: [53.35014,-6.2661]}
        this.onDecider = this.onDecider.bind(this);
    }

    componentDidMount() {
        console.log("Goign for location");
        getLocation().then((position) => {
            console.log(position);
            let lat = position.coords.latitude
            let lng = position.coords.longitude
            console.log("Location " + lat + " " + lng);
            this.setState(() => {
                return {
                    location: [lat, lng]
                }
            })
        }).catch((err) => {
            console.error(err.message);
        });
    }

    render() {
        if (!this.state.location) {
            return <div>Loading..</div>
        }
        return (
            <div className="container">
                <div className="title">
                    <span className="titleText">Burp!</span>
                </div>
                <div className="subtitle">
                    <span className="subtitleText">Let us pick a place nearby to eat tonight.</span>
                </div>
                <div className="map-container">
                    <div className="map-circle">
                        <MapComponent location={this.state.location} />
                    </div>
                </div>
                <div className="action-container"> 
                    <ActionComponent onDecider={this.onDecider}/>
                </div>    
            </div>
        );
    }

}