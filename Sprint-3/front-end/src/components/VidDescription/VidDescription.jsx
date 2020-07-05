import React from 'react'
import './VidDescription.css'

export default function VidDescription({ info }) {

    return (
        <div className="VidDesc" >

            <h1 className="VidDesc__title" >{info.title}</h1>
            <div className="VidDesc__Info">
                <div className="VidDesc__postInfo">
                    <h3 className="VidDesc__postInfo--channel"  > {info.channel}</h3>
                    <h4 className="VidDesc__postInfo--date" >{epoch2Human(info.timestamp)}</h4>
                </div>

                <div className="VidDesc__trendsInfo">
                    <img src='/assets/Icons/SVG/Icon-views.svg' className="VidDesc__trendsInfo--icon"  alt="views"></img>
                    <p className="VidDesc__trendsInfo--text" >{info.views}</p>
                    <img src='/assets/Icons/SVG/Icon-likes.svg' className="VidDesc__trendsInfo--icon" alt="likes"></img>
                    <p className="VidDesc__trendsInfo--text">{info.likes}</p>
                </div>
            </div>
            <p className="VidDesc__Desc">{info.description}</p>
        </div>
    )
}


export function epoch2Human(timeStampString) {
    
    let currentTime = new Date(timeStampString);
    let timeString = '';
    let timeDay = currentTime.getDate();
    let timeYear = currentTime.getFullYear();
    let timeMonth = currentTime.getMonth();
    let timeValue = timeString.concat(timeMonth, '/', timeDay, '/', timeYear);
   
    return timeValue;

}
