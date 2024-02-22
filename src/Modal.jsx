import React from "react"; // Importing React library for JSX
import './Modal.css'  // Importing CSS file for styling

// Functional component for a modal with props
const Modal = ({src, alt, onClose}) => {
    return(
        <div className="modal"> {/* Container for modal */}
            <div className="modal-content" onClick={(e) => e.stopPropagation()}> {/* Modal content area */}
                <img src={src} alt={alt} className="img-fluid" onClick={onClose}/> {/* Image displayed in the modal */}
            </div>
        </div>
    )
}

export default Modal; // Exporting the Modal component
