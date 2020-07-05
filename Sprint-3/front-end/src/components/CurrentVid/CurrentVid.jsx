import React from 'react'
import './CurrentVid.scss'

export default function CurrentVid({ vid }) {

    return (
    
        <div className="CurrentVid">
        
            <video className="CurrentVid__player" poster={vid.image} >
            </video>

            <div className="CurrentVid__components">
                <div className="CurrentVid__components--play">
                    <img src='../assets/Icons/SVG/Icon-play.svg' alt="play" ></img>
                </div>
                <div className="CurrentVid__components--slider">
                    <div className="CurrentVid__components--slider__line" ></div>
                    <p className="CurrentVid__components--slider__time">0:00/0:42</p>

                </div>
                <div className="CurrentVid__components--rcontrols">
                    <img src='../assets/Icons/SVG/Icon-fullscreen.svg' alt ="full screen"></img>
                    <img src='../assets/Icons/SVG/Icon-volume.svg' alt ="volume"></img>
                </div>

               

            </div>

        </div>
    )
}
