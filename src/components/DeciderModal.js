import React from 'react';
import Map from 'pigeon-maps';
import Modal from 'react-modal';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

const DeciderModal = (props) => {
  Modal.setAppElement('.root');
  console.log(props);
    return (
      <Modal 
            style={customStyles}
            isOpen={props.isVenueDecided}
            onRequestClose = {props.handleCloseModal}
        >
        <div className='container' style={{ height: '50vh', width: '50vw', fontSize: '2em', textAlign: 'center'}}>
          Try eating at {props.selectedPlace}
          <div style={{ borderRadius: 5, marginTop: 120, overflow: 'none', background:'red', height: '30vh', width: '100%'}}>
            <Map center={props.location} zoom={props.zoom} ></Map>
            </div>
        </div>
        </Modal>
    );
}

export default DeciderModal;