import React, { useEffect } from "react";
import './Comments.scss'
import * as utils from "./Comments";



export default function Comments() {
  
    useEffect(() => {
        utils.getInfo();
        //utils.insertComments();
        //utils.epoch2Human();
        //utils.postI

        
      }, []);

    return (
        <div>
        <form className="comments-form" id="submit-comments">
            <div className="comments-form__icon"></div>
            <div className="comments-form__field">
                <p for="name" className="comments-form__field--title">NAME</p>
                <input type="text" id="comment-name" className="comments-form__field--name" placeholder=" Enter Name"
                    name="name" required></input>
                <p for="comment" className="comments-form__field--title">COMMENT</p>
                <textarea placeholder="Add a new comment" id="comment-content" className="comments-form__field--comment"
                    required></textarea>
                <button type="submit" className="comments-form__field--button"
                    id="comment-submit-button">COMMENT</button>
            </div>
        </form>
        <div className="previous-comments" id="comments"></div>

    </div>

    )
}

