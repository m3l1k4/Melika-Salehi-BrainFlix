import React from 'react'
import './NavBar.scss'
const imagebg = {
    backgroundImage: 'url("../assets/Images/Mohan-muruge.jpg")',
};

export default function NavBar({ handleSubmit }) {
    return (
        <form className="NavBar">

            <img class="NavBar__logo" src='../assets/Logo/Logo-brainflix.svg'></img>
            <div className="NavBar__Search">
                <input className="NavBar__Search--field" type="text" placeholder="Search" name="Search"></input>

                <button className="NavBar__Search--button"><img src='assets/Icons/SVG/Icon-upload.svg' className="NavBar__Search--upload"></img>UPLOAD</button>

                <div className="NavBar__Search--icon" style={imagebg}></div>

            </div>


        </form>
    )
}
