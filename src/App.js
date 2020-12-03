import React,{useEffect, useState} from 'react';
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
  const [init, setInit] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userID, setUserID] = useState("");

  useEffect(()=>{
    authService.onAuthStateChanged((user)=> {
      if(user){
        setIsLoggedIn(true);
        setUserID(user.email);
      }else{
        setIsLoggedIn(false);
      }
    });
  },[]);

  return (
    <div className='app'>
      <Title 
        USERID={userID} 
        ISLOGGEDIN={isLoggedIn} 
      />
      <Sidebar/>
      
           
      <Switch>
        <Route path='/cafe'><Cafe USERID={userID} ISLOGGEDIN={isLoggedIn}/></Route>   
        <Route path='/dailygoods' component={Dailygoods}/>
        <Route path='/textile' component={Textile}/>
        <Route path='/others' component={Others}/>
        <Route path='/login'><LogIn USERID={userID} ISLOGGEDIN={isLoggedIn}/></Route>       
        <Route path='/'><Home ISLOGGEDIN={isLoggedIn}/></Route>
      </Switch>
      <footer>&copy; Sustainable Community {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;