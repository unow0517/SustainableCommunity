import React,{useEffect, useState} from 'react';
import { commentService } from 'fBase';

var db = commentService.collection('comments');


const Comment = () => {
    const [opinion, setOpinion] = useState("");
    const [lastComments, setLastComments] = useState([]);
    const onChange = (event) => {
        setOpinion(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        var date = new Date();
        var currentTime = date.getDate() + "/" + (
            date.getMonth()+1) + "/" +
            date.getFullYear() + "@" + 
            date.getHours() + ":" + 
            date.getMinutes();
        db.add({
            content: opinion,
            createdAt: currentTime
        });
        setOpinion("");
    }

    useEffect(()=> {
        db.onSnapshot((snapshot)=>{
            const commentsArray = snapshot.docs.map((doc)=>({
                id: doc.id,
                ...doc.data()
            }));
            setLastComments(commentsArray);
            console.log(commentsArray)
        });
    },[])

    return(
        <div>
            <ul>
                {lastComments.map((cmts)=>(
                    <li key={cmts.id}>{cmts.content}</li>
                ))}
            </ul>
            <form onSubmit={onSubmit}>
                <input 
                    type='text' 
                    maxLength='500' 
                    value={opinion} 
                    placeholder='leave Comments' 
                    onChange={onChange}
                    required />
                <input type='submit' value='subMit'/>
            </form>
        </div>
    )
};

export default Comment;
