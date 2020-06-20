import React from 'react'
import './CurrentVid.scss'

export default function CurrentVid({ handleSubmit }) {
    return (
        <video  className="CurrentVid" poster="/assets/Images/video-list-0.jpg" controls>
            <img className="CurrentVid__bgimg" src='/assets/Images/video-list-0.jpg' ></img>
            <div className="CurrentVid__components">
            <img className="CurrentVid__components--play" src='/assets/Icons/SVG/Icon-play.svg' ></img>
            <img className="CurrentVid__components--fs" src='/assets/Icons/SVG/Icon-fullscreen.svg' ></img>
            <img className="CurrentVid__components--vol" src='/assets/Icons/SVG/Icon-volume.svg' ></img>
            </div>

        </video>)

}
