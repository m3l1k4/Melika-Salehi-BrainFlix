import React from 'react'
import './CommentsForm.scss'

export default function CommentsForm({ handleSubmit }) {
    return (
        <div className="coments-form">
            <h3 className="comments-form-header"> 3 Comments</h3>

            <form onSubmit={handleSubmit} className="comments-form" id="submit-comments">
            <img src='/assets/Images/Mohan-muruge.jpg' className="comments-form__icon"></img>
                <div className="comments-form__field">
                    <p className="comments-form__field--title">JOIN THE CONVERSATION</p>
                    <textarea name="newComment" placeholder="Add a new comment" id="comment-content" className="comments-form__field--comment"
                        required></textarea>
               
                </div>
                <button type="submit" className="comments-form__field--button"
                        id="comment-submit-button">COMMENT</button>
            </form>
            <div className="previous-comments" id="comments"></div>

        </div>
    )
}