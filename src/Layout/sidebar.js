import React from 'react';
import {NavLink} from 'react-router-dom';


const Sidebar = ({_toCafeHome}) => {
  return ( 
    <div>
      <ul className = 'sidebar'>
        <li><NavLink exact to="/cafe" onClick={_toCafeHome}>카페</NavLink></li>
        <li><NavLink exact to="/dailygoods">생활용품</NavLink></li>
        <li><NavLink exact to="/textile">섬유</NavLink></li>
        <li><NavLink exact to="/others">기타</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar;