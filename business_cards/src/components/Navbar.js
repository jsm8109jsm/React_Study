import React from "react";

export default function Navbar() {
    return(
        <nav className="navbar">
            <a href="https://twitter.com/?lang=ko" className="nav--link"><img src="../TwitterIcon.png"></img></a>
            <a href="https://www.facebook.com/profile.php?id=100017221387161" className="nav--link"><img src="../FacebookIcon.png"></img></a>
            <a href="https://www.instagram.com/jsmjsm0203/" className="nav--link"><img src="../InstagramIcon.png"></img></a>
            <a href="https://github.com/jsm0203jsm" className="nav--link"><img src="../GitHubIcon.png"></img></a>
        </nav>
    )
}