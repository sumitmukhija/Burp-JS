import * as React from 'react';
import * as ReactDOM from 'react-dom';

import { 
  ActionButton,
  DeciderModal,
  Loader,
  Map
} from './components'

import "normalize.css/normalize.css";
import "../public/styles/style.scss";

const rootEl = document.querySelector('.root');
ReactDOM.render(<div>
  <ActionButton show={true} />
  <DeciderModal isVenueDecided={true} selectedPlace="Interlaken, Switzerland" />
  <Loader />
</div>, rootEl);
