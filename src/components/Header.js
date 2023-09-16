import React from "react";
import photo from "../Images/photo.JPEG"


export default function Header() {
    return (
        <header className="App-header" >
      
          <img src={photo} className="photo"/>
        </header>
    )
}