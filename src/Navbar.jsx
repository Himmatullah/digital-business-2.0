import React from "react";

import Smile from "./assets/SmilingFace.png"

import "./index.css";
import Button from "./assets/Button.png"


export default function Navbar(){
    return(
        <>
        <div className="navbar">
            <div>
                <img src={Smile} alt="" />
            </div>
            <h1>Laura Smith</h1>
            <p>Frontend Developer</p>
            <p className="link">laurasmith.website</p>.
            <div className="btn">
                 <button className="btn-email email" >Email</button>
                 <button className="btn-email linked fab fa-linkedin">LinkedIn</button>
            </div>
          
        </div>  
        
     </>
    );
}