import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Space from "../Space/Space";
import PropTypes from "prop-types";
import "./Layout.css";


const Layout = ({children}) => {
    return(
    <div className="Layout">
            <Header />
            {children}
            <Space /><Space />
            <Footer />
        </div>
    );
}

Layout.propTypes = {
    children: PropTypes.element,
}

export default Layout;
