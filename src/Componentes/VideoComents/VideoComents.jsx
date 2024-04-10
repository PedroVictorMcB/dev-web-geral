import React from "react";
import image from "../../Assets/Imagens/Usuario3.jpeg"; 
import "../VideoComents/videoComents.css";

export default function VideoComents(){
    return(
        <div className="videoComents">
            <div className="userImgProfile">
                <img src={image} alt="ImageProfile" />
            </div>
            <div className="userComents">
                <h4>
                    Carlos Sousa
                </h4>
                <p>
                    Adorei este curso. Aprendi muito sobre programação
                </p>
            </div>
        </div>
    )
}