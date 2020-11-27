import React from 'react';
import {NavLink} from 'react-router-dom';
const home = () => {
    return (
        <div>
            <h1>현재는 홈입니다</h1>
         <NavLink to='/login'><h1>로그인</h1></NavLink>
        </div>
    );
};

export default home;