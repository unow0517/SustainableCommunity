
import React from 'react';
import {Link} from 'react-router-dom';
import {authService} from 'fBase';

const Title = (props) =>{
    const onSignOut= () =>{
        authService.signOut()
    }

    if(props.ISLOGGEDIN === true){
        return(
            <div className='maintitlegroup'>
                <h1 className = 'maintitle'><Link className='link' to='/'>
                    지속가능한 커뮤니티입니다</Link>
                </h1>
                <div> Welcome!<br/> {props.USERID}</div>
                <button onClick={onSignOut}>
                    Log Out
                </button>                
            </div> 
        )
    } else {
        return(
            <div className='maintitlegroup'>
                <h1 className = 'maintitle'><Link className='link' to='/'>
                    지속가능한 커뮤니티입니다</Link>
                </h1>                
                <Link to='/login'><button>
                    Log In
                </button></Link>
            </div>
        ) 
    }
}

export default Title;