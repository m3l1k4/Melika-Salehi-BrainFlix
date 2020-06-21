import React, {useEffect} from 'react'
import * as util from "./ListFunctions"

export default function CommentsList({ comments }) {

    return (
        comments.map(comment => {
            return <div key={comment.id} className="Comments">
                
                <p className="Comments__name"> {comment.name}</p>
                <p className="Comments__time">  {epoch2Human(comment.timestamp)}</p>
                <p className="Comments__body"> {comment.comment}</p>

            </div>
        })
    )
}

export function epoch2Human(timeStampString) {
    
   
        let currentTime = new Date(timeStampString);
        let timeString = '';
        let timeDay = currentTime.getDate();
       let  timeYear = currentTime.getFullYear();
       let timeMonth = currentTime.getMonth();
        let timeValue = timeString.concat(timeMonth, '/', timeDay, '/', timeYear);
        console.log(timeValue);
        return timeValue;
    
    }
    