import React from 'react'
import { Route, Link, Switch, BrowserRouter as Router, BrowserRouter } from 'react-router-dom'
import './NavBar.scss'
import UploadForm from '../UploadForm'

const imagebg = {
    backgroundImage: 'url("../assets/Images/Mohan-muruge.jpg")',
};

export default function NavBar({ handleSubmit }) {
    return (
        <form className="NavBar">

          <Link to='/home' > <img class="NavBar__logo" src='../assets/Logo/Logo-brainflix.svg'></img> </Link> 
          <Route exact path="/home"/>
            <div className="NavBar__Search">
                <input className="NavBar__Search--field" type="text" placeholder="Search" name="Search"></input>
               
               
          
                 
                 <button className="NavBar__Search--button" onClick="window.location.reload()"><img src='assets/Icons/SVG/Icon-upload.svg' className="NavBar__Search--upload"></img>UPLOAD</button>
                 <Link to="/upload" >   
            potato
          
               </Link>
              
        
               
               

                <div className="NavBar__Search--icon" style={imagebg}></div>

            </div>


        </form>
    )
}


