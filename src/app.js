import React from 'react';
import ReactDOM from 'react-dom';
import "normalize.css/normalize.css";
import Burp from "./components/Burp";
import "../public/styles/style.scss";

const rootEl = document.querySelector('.root');
ReactDOM.render(<Burp />, rootEl);
