import React from "react";
import "./Footer.css";
import eitaa from "../Contact/IconSVGs/eitaa.svg";
import telegram from "../Contact/IconSVGs/telegram.svg";
import whatsapp from "../Contact/IconSVGs/whatsapp.svg";

const Footer = () => {
    return (
        <div className="Footer">
            <a href="https://eitaa.com/ftm_moi">
                <img src={eitaa} alt="eitaa" />
            </a>        
            <a href="https://t.me/ftm_moi">
                <img src={telegram} alt="telegram" />
            </a>            
            <a href="https://wa.me/qr/MXL6VMO774FZI1">
                <img src={whatsapp} alt="whatsapp" />
            </a>       
        </div>
    );
};

export default Footer;
