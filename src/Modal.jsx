import PropTypes from 'prop-types';
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


Modal.propTypes = {
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    onClose: PropTypes.func.isRequired
};

export default Modal; // Exporting the Modal component
