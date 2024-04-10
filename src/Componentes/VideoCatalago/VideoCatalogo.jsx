import React from "react";
import './VideoCatalogo.css';


const VideoCatalogo = () => {
    return (
        <div className="ContainerVideo">
            <div className="Video">
                <iframe width="560" height="315" src="https://www.youtube.com/embed/rfscVS0vtbw?si=S768vEy4VxE4Q9Bf"
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen>
                </iframe>
            </div>
            <hr className="divisor" />
        </div>
    )
}

export default VideoCatalogo;