import React,{useEffect, useState} from 'react';
import { commentService } from 'fBase';


// var _path = window.location.pathname
// console.log(_path)
var db = commentService.collection(`comments`);


const Comment = ({USERID,ISLOGGEDIN}) => {
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
            createdAt: currentTime,
            user: USERID
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
        });
    },[]);

    if(ISLOGGEDIN){
        return(
            <div className='commentsection'>
                <ul className='comments'>
                    {lastComments.map((cmts)=>(
                        <li key={cmts.id} className='commentlist'>
                            <div>{USERID} : {cmts.content}</div>
                        </li>
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
    } else if(ISLOGGEDIN===false){
        return(
            <div className='commentsection'>
                <ul className='comments'>
                    {lastComments.map((cmts)=>(
                        <li key={cmts.id} className='commentlist'>
                            <div>{USERID} : {cmts.content}</div>                 
                        </li>
                    ))}
                </ul>
                    <input 
                        type='text' 
                        maxLength='500' 
                        value={opinion} 
                        placeholder='Sign In To Leave Comments' 
                        onChange={onChange}
                        required 
                    />
            </div>
    )}
};

export default Comment;
