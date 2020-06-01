import React, { useEffect, useState } from "react";
import ReactModal from 'react-modal';
import YouTube from '@u-wave/react-youtube';



export default function Modal(props) {

    let [final, setFinal] = useState(null) 

    const fire = () =>{
    setFinal(props.movieUrl[0].key)
    }
  
    if (props.openModal == true){
        // fire()
    }
    return (
        <div>
            <ReactModal isOpen={props.openModal}

                style={
                { 
                overlay: {zIndex: 1000}, 
                content: {} 
                }}>

            <div>

                <YouTube video={final} autoplay={false} width="800" height="500"/>

            </div>    
            <p>{props.modalDescription}</p>
            <button onClick={()=>props.closeModal()}>Close</button>
            <button onClick={()=> fire()}>fire</button>
            </ReactModal>
        </div>
    )
}
