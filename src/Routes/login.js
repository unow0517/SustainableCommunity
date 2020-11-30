import { authService } from 'fBase';
import React,{useState} from 'react';
import Popup from 'reactjs-popup'

const LogIn = () =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const onChange = (event) => {
        const {
            target: {name, value}
        } = event;
        if (name === "email"){
            setEmail(value);
        } else if (name === 'password'){
            setPassword(value);
        }
    }

    const onSubmit = async (event)=> {
        event.preventDefault();
        try{
            let data;
            if(newAccount){
                data = await authService.createUserWithEmailAndPassword(email,password)
            }else{
                data = await authService.signInWithEmailAndPassword(email,password)
            }
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    };

    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name='email' type='text' placeholder='E-Mail' required value={email} onChange={onChange}/>
                <input name ='password' type='password' placeholder='Password' required value={password} onChange={onChange}/>
                <input type='submit' value = {newAccount ? "Create Account" : "Log In"} />
            </form>
            <div>
                Continue with Google
            </div>
            <div>
                Continue with Facebook
            </div>
            <Popup
                trigger={<button className="button"> Sign Up</button>}
                modal
                nested
            >
            {close => (
                <div className="modal">
                <button className="close" onClick={close}>
                    &times;close
                </button>
                <div className="header"> Sign Up </div>
                <div className="content">
                    Email: <input type='email' required/><br/>
                    Password:<input type='password' required/>
                </div>
                <div className="actions">                    
                    <button>Submit</button>
                </div>
                </div>
            )}
            </Popup>
        </div>
    )
}

export default LogIn;