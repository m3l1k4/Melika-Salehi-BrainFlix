import React from 'react'


export default function CommentsList({ comments }) {
    return (
        comments.map(comment => {
            return <div key={comment.id} className="Comments">

                <h2 className="Comments__name"> {comment.name}</h2>
                <h2 className="Comments__time"> {comment.timeStamp}</h2>
                <p className="Comments__body"> {comment.comment}</p>

            </div>
        })
    )
}


