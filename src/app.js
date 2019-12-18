import React from 'react';
import ReactDOM from 'react-dom';
import Burp from "./components/Burp";
import { getLocation } from "./util/geo_util";

const rootEl = document.querySelector('.root');
ReactDOM.render(<Burp />, rootEl);
