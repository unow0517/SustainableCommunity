import React from 'react';
import {NavLink} from 'react-router-dom';


const Sidebar = () => {
  return ( 
    <div>
      <ul className = 'sidebar'>
        <li><NavLink to="/cafe">카페</NavLink></li>
        <li><NavLink to="/dailygoods">생활용품</NavLink></li>
        <li><NavLink to="/textile">섬유</NavLink></li>
        <li><NavLink to="/others">기타</NavLink></li>
      </ul>
    </div>
  )
}

export default Sidebar;