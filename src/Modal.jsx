import React from "react";
import './Modal.css'

const Modal = ({src, alt, onClose}) => {
    return(
        <div className="modal" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt={alt} className="img-fluid" />
            </div>
        </div>
    )
}

export default Modal;
