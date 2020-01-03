import React from 'react';
import ActionComponent from "./ActionComponent";
import MapComponent from "./MapComponent";
import Decider from "./DeciderModal";
import Loader from "./Loader";
import { getLocation } from "../util/geo_util";
import { getListings } from "../util/network_util";

export default class Burp extends React.Component{

    handleOpenModal() {
        this.setState(() => { return { isVenueDecided: true } });
    }

    handleCloseModal() {
        this.setState(() => { return { isVenueDecided: false } });
    }

    onCompleteRequest(err, place) {
        if (err || !place) {
            if (!err) {
                err = "Something went wrong!";
            }
            alert(err);
            return;
        }
        else {
            this.setState(() => {
                return { place: place }
            })
        }
    }

    getMapOrLoader() {
        return (this.state.place !== null) ? (<MapComponent location={this.state.location} />) : (<Loader />);
    }

    constructor() {
        super();
        this.state = { location: null, place: null, isVenueDecided: false}
        this.handleOpenModal = this.handleOpenModal.bind(this);
        this.handleCloseModal = this.handleCloseModal.bind(this);
        this.onCompleteRequest = this.onCompleteRequest.bind(this);
        this.getMapOrLoader = this.getMapOrLoader.bind(this);
    }

    componentDidMount() {
        getLocation().then((position) => {
            let lat = position.coords.latitude;
            let lng = position.coords.longitude;
            getListings(lat, lng, this.onCompleteRequest);
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
        if (this.state.isVenueDecided) {
            return <Decider
                handleCloseModal={this.handleCloseModal}
                isVenueDecided={this.state.isVenueDecided}
                handleCloseModal={this.handleCloseModal}
                location={[this.state.place.position[0],this.state.place.position[1] ]}
                zoom={16}
                selectedPlace={this.state.place.title}
                />
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
                        {this.getMapOrLoader()}
                    </div>
                </div>
                <div className="action-container"> 
                    <ActionComponent onDecider={this.handleOpenModal} place={this.state.place}/>
                </div>    
            </div>
        );
    }

}