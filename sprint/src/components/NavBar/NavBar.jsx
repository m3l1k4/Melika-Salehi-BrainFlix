import React from 'react'
import './NavBar.scss'

export default function NavBar({ handleSubmit }) {
    return (
        <form className="NavBar" onSubmit={handleSubmit}>
            <div className="NavBar-Search">
                <input className="NavBar-Search__field" type="text" placeholder="Search" name="Search" />
                
                <button className="NavBar-Search__button"><img src='assets/Icons/SVG/Icon-upload.svg' className="NavBar-Search__upload-icon"></img>Upload</button>
                
                <img src='/assets/Images/Mohan-muruge.jpg' className="NavBar-Search__icon"></img>
            </div>

            <img src='/assets/Logo/Logo-brainflix.svg'></img>
        </form>
    )
}
