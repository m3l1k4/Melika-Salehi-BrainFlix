import React from 'react'
import {  Link } from 'react-router-dom'
import './NavBar.scss'


const imagebg = {
    backgroundImage: 'url("../assets/Images/Mohan-muruge.jpg")',
};

export default function NavBar({ handleSubmit }) {
    return (
        <div className="NavBar">
          
          <Link to='/home' > <img className="NavBar__logo" src='../assets/Logo/Logo-brainflix.svg'alt ="logo"></img> </Link> 
  
          
            <div className="NavBar__Search">
                <input className="NavBar__Search--field" type="text" placeholder="Search" name="Search"></input>
               
               
                <div className="NavBar__Search--user">
                 <Link to="/upload" className="link">
                 <button className="NavBar__Search--user__button" ><img src='assets/Icons/SVG/Icon-upload.svg' className="NavBar__Search--user__upload" alt ="upload"></img>UPLOAD</button>
                  </Link>
                <div className="NavBar__Search--user__icon" style={imagebg}></div>
                </div>
            </div>


        </div>
    )
}


