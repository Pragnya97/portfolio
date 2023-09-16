import React from "react";
import Instalogo from "../Images/instagram.png";
import Twitterlogo from "../Images/twitter.png";
import gitlogo from "../Images/github.png"

export default function Footer() {
    return (
        <footer className="footer">
        
            <img src={Twitterlogo} className="Twiiterlogo" width="25px"/>
            <img src={Instalogo} className="Instalogo" width="25px"/>
            <img src={gitlogo} className="gitlogo" width="25px"/>


        </footer>
    )
}