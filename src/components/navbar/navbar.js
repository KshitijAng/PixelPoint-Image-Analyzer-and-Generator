import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAddressCard, faAddressBook } from '@fortawesome/free-regular-svg-icons'; 
import { faHome } from '@fortawesome/free-solid-svg-icons';  
import Logo from "../../assets/logo2.png";

const Navbar = () => {
    return (
        <header className="header">
            <a href="wubfw" className="logo"><img src={Logo} alt="logo" /></a>

            <nav className="navbar">
                <a href="/home">Home <FontAwesomeIcon icon={faHome} style={{ color: "#ffffff", verticalAlign: "-0.05em", marginRight: "7px" }} /></a>
                <a href="/about">About <FontAwesomeIcon icon={faAddressCard} style={{ color: "#ffffff", verticalAlign: "-0.15em", marginRight: "7px" }} /></a>
                <a href="/contact">Contact <FontAwesomeIcon icon={faAddressBook} style={{ color: "#ffffff", verticalAlign: "-0.15em", marginRight: "7px" }} /></a>
            </nav>
        </header>
    );
}

export default Navbar;
