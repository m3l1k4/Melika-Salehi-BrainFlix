import React from 'react'
import axios from "axios";


import './UploadForm.scss'

export default function UploadForm({ handleUpload }) {


    handleUpload = (event) =>{
        event.preventDefault();
        const idnum=String(new Date().getTime());
      
            let newUpload = {
                id: idnum,
                title: event.target.newuploadtitle.value,
                channel: "Mohan Muruge",
                image: "./assets/Images/Upload-video-preview.jpg",
            
              };

            let newUploadInfo = {
                id: idnum,
                title: event.target.newuploadtitle.value,
                channel: "Mohan Muruge",
                image: "./assets/Images/Upload-video-preview.jpg",
                description: event.target.newuploaddesc.value,
                views: "3,092,284",
                likes: "75,985",
                duration: "4:20",
                video: "",
                timestamp: 1531007012000,
                comments:[  {
                    name: "Micheal Lyons",
                    comment: "They BLEW the ROOF off at their last show, once everyone started figuring out they were going. This is still simply the greatest opening of acconcert I have EVER witnessed.",
                    id: "1ab6d9f6-da38-456e-9b09-ab0acd9ce818",
                    likes: 0,
                    timestamp: 1545162149000
                }]
              };
            

              axios
              .post('/videos', newUpload)
              .then(console.log("uploaded"));

              axios.post('/mainVid',newUploadInfo )
              .then(console.log("uploaded"));
           
              event.target.reset();
            };




    return (
        <div className="upload-video">
            <h1 className="upload-video__header"> Upload Video</h1>

            <form onSubmit={handleUpload} className="upload-video__form" id="submit-upload">
                <div className="upload-video__form--body" >
                    <div className="upload-video__form--body__visual">
                        <p className="upload-video__form--body__visual--title">VIDEO THUMBNAIL </p>
                        <img src='./assets/Images/Upload-video-preview.jpg' className="upload-video__form--body__visual--img" alt="video preview"></img>
                    </div>
                    <div className="upload-video__form--body__field">
                        <p className="upload-video__form--body__field--title">TITLE YOUR VIDEO</p>
                        <textarea name="newuploadtitle" placeholder="Add a title to your video" id="upload-content-title" className="upload-video__form--body__field--upload-title"
                            required></textarea>
                        <p className="upload-video__form--body__field--title">ADD A VIDEO DESCRIPTION</p>
                        <textarea name="newuploaddesc" placeholder="Add a new upload" id="upload-content-dsc" className="upload-video__form--body__field--upload-desc"
                            required></textarea>

                    </div>

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