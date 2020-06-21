import React from 'react'
import './NextVid.scss'

export default function NextVid({ vids }) {
    return (
       
        vids.map(vid => {
            return <div key={vid.id} className="NextVid">

                <h1 className="NextVid__title"> {vid.title}</h1>
                <h2 className="NextVid__channel"> {vid.channel}</h2>
                <img src={vid.image} key={vid.id} className="NextVid__thumbnail" />
            </div>
        })
    )
}
