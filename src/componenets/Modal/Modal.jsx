import React from "react";
import "./Modal.css";
import PropTypes from "prop-types";


const Modal = ({isOpen, onClose, children}) => {
    if (!isOpen) return null;

    return (
        <div className="Modal" onClick={onClose}>
            <div className="Modal--text">{children}</div>
        </div>
    );
};

Modal.propTypes = {
    isOpen: PropTypes.bool,
    onClose: PropTypes.func,
    children: PropTypes.element,
}

export default Modal;
