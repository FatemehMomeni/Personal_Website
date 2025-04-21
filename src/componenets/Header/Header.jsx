import React from "react";
import { useLocation } from "react-router";
import {Link} from "react-router";
import "./Header.css";
import logo from "./MIweb-removebg.png";
import { useMediaQuery } from 'react-responsive';


const Header = () => {
    let {pathname} = useLocation();
    const isMobile = useMediaQuery({ query: '(max-width: 600px)' });

    return(
        <div className="Header">                  
            {!isMobile && <img src={logo} alt="logo" onClick={() => <Link to="/" />} className="Header--logoImg" /> }
            <nav style={{width: '100%'}}>                
                <ul className="Header--tabs">                    
                    {isMobile && <img src={logo} alt="logo" onClick={() => <Link to="/" />} className="Header--logoImg" /> }
                    <li className="Header--item" style={{gridRow: '1 2'}}>
                        <Link className={`Header--link${pathname === "/" ? " active" : ""}`} to="/">صفحه نخست</Link>
                    </li>
                    <li className="Header--item" style={{gridRow: '2 3'}}>
                        <Link className={`Header--link${pathname === "/portfolio" ? " active" : ""}`} to="/portfolio">نمونه‌کارها</Link>
                    </li>
                    <li className="Header--item" style={{gridRow: '3 4'}}>
                        <Link className={`Header--link${pathname === "/about" ? " active" : ""}`} to="/about">درباره ما</Link>
                    </li>
                    <li className="Header--item" style={{gridRow: '4 5'}}>
                        <Link className={`Header--link${pathname === "/contact" ? " active" : ""}`} to="/contact">تماس با ما</Link>
                    </li>
                </ul>                
            </nav>         
        </div>
    );
};

export default Header;
