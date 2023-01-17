import React from "react";
import logo from "../images/Troll_Face.png"
export default function Header(){
    return(
        <header className="header">
            <img 
                src={logo} 
                alt="logo"
                className="header--image"></img>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">Jmslord Project</h4>
        </header>
    )
}