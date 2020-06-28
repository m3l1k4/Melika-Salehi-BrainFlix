import React from 'react'
import './VidDescription.css'

export default function VidDescription({ vid }) {

    return (


        vid.map(vid => {


       return  <div key={vid.id} className="VidDesc" >

            <h1 className="VidDesc__title" >{vid.title}</h1>
            <div className="VidDesc__Info">
                <div className="VidDesc__postInfo">
                    <h3 className="VidDesc__postInfo--channel"  > By Red Cow</h3>
                    <h4 className="VidDesc__postInfo--date" >12/18/2018</h4>
                </div>

                <div className="VidDesc__trendsInfo">
                    <img src='/assets/Icons/SVG/Icon-views.svg' className="VidDesc__trendsInfo--icon" ></img>
                    <p className="VidDesc__trendsInfo--text" >1,001,023</p>
                    <img src='/assets/Icons/SVG/Icon-likes.svg' className="VidDesc__trendsInfo--icon" ></img>
                    <p className="VidDesc__trendsInfo--text">110,985</p>
                </div>
            </div>
            <p className="VidDesc__Desc">On a gusty day in Southern Utah, a group of 25 daring mountain bikers blew the doors off what is possible on two wheels, unleashing some of the biggest moments the sport has ever seen. While mother nature only allowed for one full run before the conditions made it impossible to ride, that was all that was needed for event veteran Kyle Strait, who won the event for the second time -- eight years after his first Red Cow Rampage title</p>
        </div>
         })
    )
}