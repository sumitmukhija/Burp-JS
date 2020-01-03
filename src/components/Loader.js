import React from 'react';
import placeholder from "../../public/images/placeholder.png";

const Loader = () => {
    return (
        <div className="loader">
            <img src={placeholder} width="120" height="120"></img>
        </div>);
};


export default Loader;