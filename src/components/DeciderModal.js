import React from 'react';
import ReactDOM from 'react-dom';
import Modal from 'react-modal';

const DeciderModal = (props) => {
  Modal.setAppElement('.root');
    return (
        <Modal 
           isOpen={props.isVenueDecided}
           contentLabel="Minimal Modal Example"
        >
          <button onClick={props.handleCloseModal}>Close Modal</button>
        </Modal>
    );
}

export default DeciderModal;