import React, {useEffect} from 'react'
import * as util from "./ListFunctions"

export default function CommentsList({ comments }) {
 /*
  let rValthis= useEffect(()=>{
    let rVal= util.epoch2Human("noot");
    return rVal
}, []); */


    return (
        comments.map(comment => {
            return <div key={comment.id} className="Comments">
                {epoch2Human(comment.timestamp)}
                <h2 className="Comments__name"> {comment.name}</h2>
                <h2 className="Comments__time">  {epoch2Human(comment.timestamp)}</h2>
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
    