import React from "react";
import PropTypes from "prop-types";
import "./Button.css";


const Button = ({children, handleClick = () => {}, ...props }) => (
    <button onClick={handleClick} className="btn btn-primary" {...props} id="myBtn">  
        {children}
    </button>
);

Button.propTypes = {
    handleClick: PropTypes.func,
    children: PropTypes.element,
}

export default Button;
