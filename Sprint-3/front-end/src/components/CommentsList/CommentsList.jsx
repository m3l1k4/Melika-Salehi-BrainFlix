import React  from 'react'
import './CommentsList.scss'

export default function CommentsList({ comments }) {

    return (
        comments.map(comment => {
            return <div key={comment.id} className="Comments">
                <div className="Comments__box">
                    <div className="Comments__icon"></div>
                    <div className="Comments__div">
                        <div>
                            <div className="Comments__heading">
                                <p className="Comments__heading--name"> {comment.name}</p>
                                <p className="Comments__heading--time">  {epoch2Human(comment.timestamp)}</p>
                            </div>
                            <p className="Comments__comment"> {comment.comment}</p>
                        </div>
                    </div>
                </div>


            </div>
        })
    )
}

export function epoch2Human(timeStampString) {
    
    let currentTime = new Date(timeStampString);
    let timeString = '';
    let timeDay = currentTime.getDate();
    let timeYear = currentTime.getFullYear();
    let timeMonth = currentTime.getMonth();
    let timeValue = timeString.concat(timeMonth, '/', timeDay, '/', timeYear);

    return timeValue;

}
