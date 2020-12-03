import { authService, firebaseInstance } from 'fBase';
import React,{useState} from 'react';
import { useHistory } from 'react-router-dom';
import Popup from 'reactjs-popup'

const LogIn = ({USERID, ISLOGGEDIN}) =>{
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [newAccount, setNewAccount] = useState(false);
    const [errMessage, setErrMessage] = useState("");
    const history = useHistory();

    const onSocialClick = async (event) => {
        const {target:{name}} = event;
        let provider;
        if (name === "google") {
            provider = new firebaseInstance.auth.GoogleAuthProvider();
        } else if(name ==='facebook'){
            provider = new firebaseInstance.auth.FacebookAuthProvider();
        }
        const data = await authService.signInWithPopup(provider);
        console.log(data);
    }
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
                history.push("/");
            }
        } catch (error) {
            console.log(error);
            setErrMessage(error.message)
        }
    };
    const signUp = () => {
        setNewAccount(true)
    }
    const signIn = () => {
        setNewAccount(false)
    }

    if(ISLOGGEDIN){
        return(
            <div>
            Hello,{USERID} you are logged in
            </div>)
    } else{
        return(
            <div>
                <form onSubmit={onSubmit}>
                    <input name='email' type='text' placeholder='E-Mail' required value={email} onChange={onChange}/>
                    <input name ='password' type='password' placeholder='Password' required value={password} onChange={onChange}/>
                    <input type='submit' value = "Log In" onClick={signIn} />
                </form>
                {errMessage}
                <div>
                    <button name="google" onClick={onSocialClick}>Continue with Google</button>
                    <button name="facebook" onClick={onSocialClick}>Continue with Facebook</button>
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
                <form onSubmit={onSubmit}>
                    <input name='email' type='text' placeholder='E-Mail' required value={email} onChange={onChange}/>
                    <input name ='password' type='password' placeholder='Password' required value={password} onChange={onChange}/>
                    <input type='submit' value = "Sign Up" onClick={signUp} />
                </form>
                    </div>
                )}
                </Popup>
            </div>
        )
    }
}

export default LogIn;