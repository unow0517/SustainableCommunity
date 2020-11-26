import React from 'react';
import Title from './Layout/title';
import Sidebar from './Layout/sidebar';
import Cafe from './Routes/cafe';
import Dailygoods from './Routes/dailygoods';
import Textile from './Routes/textile';
import Others from './Routes/others';
import LogIn from './Routes/login'
import {Route, Switch} from 'react-router-dom';
import Home from './Routes/home'

const App = () => {

  return (
    <div className='app'>
      <Title/>
      <Sidebar/>
      
           
      <Switch>
        <Route path="/cafe" component={Cafe}/>
        <Route path='/dailygoods' component={Dailygoods}/>
        <Route path='/textile' component={Textile}/>
        <Route path='/others' component={Others}/>
        <Route path='/login' component={LogIn}/>       
        <Route path='/' component={Home}/>
      </Switch>
    </div>
  );
}

export default App;