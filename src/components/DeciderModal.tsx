import * as React from 'react';
import { Map, MapProps } from './Map';

export interface DeciderModalProps {
  isVenueDecided: boolean
  selectedPlace: string
  mapSettings?: MapProps
}

export const DeciderModal = (props: DeciderModalProps) => {
  const { selectedPlace, mapSettings } = props;
  return (
    <div className='container' style={{ height: '50vh', width: '50vw', fontSize: '2.4em', textAlign: 'center' }}>
      Try eating at <br /><br /> <strong> {selectedPlace} </strong>
      <div style={{ borderRadius: 5, marginTop: 120, overflow: 'none', background: 'red', height: '30vh', width: '100%' }}>
        <Map location={mapSettings.location} zoom={mapSettings.zoom}></Map>
      </div>
    </div>
  );
}
