import React from 'react';
import {NavLink} from 'react-router-dom';
const home = ({ISLOGGEDIN}) => {
    if(ISLOGGEDIN){
        return (
            <div>
                <h1>현재는 홈입니다</h1>
                로그인돼있음
            </div>
        )
    } else {
        return (
            <div>
                <h1>현재는 홈입니다</h1>
             <NavLink className='link' to='/login'><h1>로그인</h1></NavLink>
            </div> 
        )    
    }
    
};

export default home;