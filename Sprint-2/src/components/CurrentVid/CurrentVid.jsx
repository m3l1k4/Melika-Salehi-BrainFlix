import React from 'react'
import './CurrentVid.scss'

export default function CurrentVid({ vid }) {
    const json = vid[1];
    const obj = JSON.parse(json);
    
    console.log(obj.count);
    // expected output: 42
    
    console.log(obj.result);
    // expected output: true

    console.log(vid[1]);

let cid="1af0jruup5gu";
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
