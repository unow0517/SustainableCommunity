import React,{useEffect, useState} from 'react';
import Title from 'Layout/title';
import Sidebar from 'Layout/sidebar';
import CafeHome from 'Routes/CafeHome';
import DailyGoodsHome from 'Routes/DailyGoodsHome';
import TextileHome from 'Routes/TextileHome';
import OthersHome from 'Routes/OthersHome';
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
        <Route 
          path='/cafe' 
          render={(info) =>
            <CafeHome USERID={userID} ISLOGGEDIN={isLoggedIn} {...info}/>
          }
        />
        <Route 
          path='/dailygoods' 
          render={(info) =>
            <DailyGoodsHome USERID={userID} ISLOGGEDIN={isLoggedIn} {...info}/>
          }
        />
        <Route 
          path='/textile' 
          render={(info)=><TextileHome USERID={userID} ISLOGGEDIN={isLoggedIn} {...info}/>}
        />
        <Route 
          path='/others' 
          render ={(info)=><OthersHome USERID={userID} ISLOGGEDIN={isLoggedIn} {...info}/>}
        />
        <Route 
          path='/login'
          render={(info)=><LogIn USERID={userID} ISLOGGEDIN={isLoggedIn} {...info}/>}
        />
        <Route 
          path='/'
          render= {(info)=> <Home USERID={userID} ISLOGGEDIN={isLoggedIn} {...info}/>}
        />
    </Switch>
      <footer className='footer'>&copy; Sustainable Community {new Date().getFullYear()}</footer>
    </div>
  );
}

export default App;