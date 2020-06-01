import React from 'react'
import ReactModal from 'react-modal';

export default function Modal(props) {

    return (
        <div>
            <ReactModal isOpen={props.openModal}

                style={
                { 
                overlay: {zIndex: 1000}, 
                content: {} 
                }}>
                
            <p>{props.modalDescription}</p>
            <button onClick={()=>props.closeModal()}>Close</button>

            </ReactModal>
        </div>
    )
}
