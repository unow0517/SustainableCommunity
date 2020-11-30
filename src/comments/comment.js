import React,{useState} from 'react';
import { commentService } from 'fBase';

var db = commentService.collection('comments');


const Comment = () => {
    const [opinion, setOpinion] = useState("");
    const onChange = (event) => {
        setOpinion(event.target.value);
    }
    const onSubmit = (event) => {
        event.preventDefault();
        db.add({
            content: opinion,
            createdAt: Date.now()
        });
        setOpinion("");
    }
    return(
        <form onSubmit={onSubmit}>
            <input 
                type='text' 
                maxLength='500' 
                value={opinion} 
                placeholder='leave Comments' 
                onChange={onChange} />
            <input type='submit' value='subMit'/>
        </form>
    )
};

export default Comment;
