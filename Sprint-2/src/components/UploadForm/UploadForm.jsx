import React from 'react'


import './UploadForm.scss'

export default function UploadForm({ handleSubmit }) {
    return (
        <div className="upload-video">
            <h1 className="upload-video__header"> Upload Video</h1>

            <form onSubmit={handleSubmit} className="upload-video__form" id="submit-upload">

                <div className="upload-video__form--visual">
                    <p className="upload-video__form--visual__title">VIDEO THUMBNAIL </p>
                    <img src='assets/Images/Upload-video-preview.jpg' className="upload-video__form--visual__img"></img>
                </div>
                <div className="upload-video__form--field">
                    <p className="upload-video__form--field__title">TITLE YOUR VIDEO</p>
                    <textarea name="newuploadtitle" placeholder="Add a title to your video" id="upload-content" className="upload-video__form--field__upload-title"
                        required></textarea>
                    <p className="upload-video__form--field__title">ADD A VIDEO DESCRIPTION</p>
                    <textarea name="newuploaddesc" placeholder="Add a new upload" id="upload-content" className="upload-video__form--field__upload-desc"
                        required></textarea>

                </div>

              <div className="upload-video__form--options">
                <button type="submit" className="upload-video__form--options__button"
                    id="upload-submit-button">UPLOAD</button>
                <p className="upload-video__form--options__cancel">CANCEL</p>
          
                </div>  
            </form>


        </div>
    )
}