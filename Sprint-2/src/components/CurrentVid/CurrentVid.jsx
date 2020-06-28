import React from 'react'
import './CurrentVid.scss'

export default function CurrentVid({ vid }) {
   
  console.log(vid[1])
    return (
    
        <div className="CurrentVid">
        
            <video className="CurrentVid__player" >

            <img />
            </video>

            <div className="CurrentVid__components">
                <div className="CurrentVid__components--play">
                    <img src='../assets/Icons/SVG/Icon-play.svg' ></img>
                </div>
                <div className="CurrentVid__components--slider">
                    <div className="CurrentVid__components--slider__line" ></div>
                    <p className="CurrentVid__components--slider__time">0:00/0:42</p>

                </div>
                <div className="CurrentVid__components--rcontrols">
                    <img src='../assets/Icons/SVG/Icon-fullscreen.svg' ></img>
                    <img src='../assets/Icons/SVG/Icon-volume.svg' ></img>
                </div>

               

            </div>

        </div>
    )
}
