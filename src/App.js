import React from 'react';
import {Route} from 'react-router-dom'
import Home from './components/home';
import Sidebar from './components/sidebar';

const App = () => {
  return (
    <div>
      <h1 className = 'title'>지속가능한 커뮤니티입니다</h1>
      <Sidebar/>
      <div className='main'>
        <a href='/'>Home</a>
        <Route exact path='/'><Home/></Route>
      </div>
    </div>
  );
}

export default App;