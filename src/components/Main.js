import React from "react";
import linkedin from "../Images/linkedin.png";
import email from "../Images/email.png"

export default function Main() {
    return (
       
        <div className="description">
            <h2>Pragnya Tappatla</h2>
            <h4>Frontend Developer</h4>
            <h4>About</h4>
          
            <a href="https://www.linkedin.com/in/tappatla-pragnya/" target="_blank">
            <div class="custom-button">
            <img src={linkedin} alt="Button Image"/>
            <span>LinkedIn</span>
            </div>
            </a>



            <div class="custom-button">
            <img src={email} alt="Button Image"/>
            <span>Email</span>
            </div>
            
            <div className="container">
            <p>I am a front-end devemoper with four years of industry experience in designing and developing
                websites. I love creating interactive and user-friendly applications. Worked for a major airlines
                company and played a major role in developing and enhancing their website. 
            </p>
            
            <div className="skills">

            <p >Skills</p>
            <ul className="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>Angular</li>
                <li>React</li>
            
                
               
            </ul>

        </div>
        </div>
        </div>
        
    )
}