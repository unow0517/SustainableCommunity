import React,{useState} from 'react';
import Title from 'Layout/title';
import Sidebar from 'Layout/sidebar';
import Cafe from 'Routes/cafe';
import Dailygoods from 'Routes/dailygoods';
import Textile from 'Routes/textile';
import Others from 'Routes/others';
import LogIn from 'Routes/login';
import {Route, Switch} from 'react-router-dom';
import Home from 'Routes/home';
import {authService} from 'fBase';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(authService.currentUser);
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
      <footer>&copy; Sustainable Community {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;