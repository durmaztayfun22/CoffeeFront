import React from "react"; // Importing React library for JSX
import './Modal.css'  // Importing CSS file for styling

// Functional component for a modal with props
const Modal = ({src, alt, onClose}) => {
    return(
        <div className="modal"  onClick={(e) => e.stopPropagation()}> {/* Container for modal, clicking anywhere outside modal will close it */}
            <div className="modal-content" onClick={onClose}> {/* Modal content area */}
                <img src={src} alt={alt} className="img-fluid" onClick={(e) => e.stopPropagation()} /> {/* Image displayed in the modal */}
            </div>
        </div>
    
    )
}

export default Modal; // Exporting the Modal component
