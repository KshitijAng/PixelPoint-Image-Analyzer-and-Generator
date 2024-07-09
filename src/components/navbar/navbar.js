import React from "react";
import "../../App.css"
import Logo from "../../assets/image.png";

const Navbar = () => {
    return (
        <header class="header">
        <a href="wubfw" class="logo"><img src={Logo} alt="logo"></img></a>

        <nav className="navbar">
            <a href="/home">Home</a>
            <a href="/home">About</a>
            <a href="/home">Contact</a>
        </nav>

        </header>
    );
}

export default Navbar;