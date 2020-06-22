import React from 'react'
import './NextVid.scss'

export default function NextVid({ vids }) {
    return (

        vids.map(vid => {
            return <div key={vid.id} className="NextVid">
                <div className="NextVid__info">
                    <h2 className="NextVid__info--title"> {vid.title}</h2>
                    <h3 className="NextVid__info--channel"> {vid.channel}</h3>
                </div>

                <img src={vid.image} key={vid.id} className="NextVid__thumbnail" />
            </div>
        })
    )
}
