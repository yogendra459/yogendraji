import { useState } from "react";
import yogendra1 from "./yogendra1.jpg"
export default function Home() {
    return(
        <div className="home">
            <div className="home-about">
                <h3>Hey, I'm Yogendra Bairwa</h3>
                <h1>Full Stack <br />Developer</h1>
                <p>Elevating ideas through code. Explore my portfolio and witness the power of innovation in every line.</p>
                <a href="#contact" className="Contact-home">Contact Me</a>
                </div>
            <div className="home-img-1">
                <img src={yogendra1} alt="yogendra1"  className="home-img"/>
            </div>
            
        </div>
    )
}