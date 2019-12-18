import React from 'react';
import ReactDOM from 'react-dom';
import Burp from "./components/Burp";
import { getLocation } from "./util/geo_util";
import "../public/styles/style.css"

const rootEl = document.querySelector('.root');
ReactDOM.render(<Burp />, rootEl);
