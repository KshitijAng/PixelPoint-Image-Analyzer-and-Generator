import React from "react";
import "../../App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShieldAlt } from '@fortawesome/free-solid-svg-icons';
import { faDollarSign } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  return (
    <div className="footer">
      <p> @PixelPilot 2024</p>
      <footer className="navbar">
        <a href="/home">Privacy <FontAwesomeIcon icon={faShieldAlt} style={{ color: "#ffffff" }} /> </a>
        <a href="/home">Terms of use </a>
        <a href="/home">Contribute <FontAwesomeIcon icon={faDollarSign} style={{ color: '#ffffff' }} /> </a>
      </footer>
    </div>
  );
};

export default Footer;
