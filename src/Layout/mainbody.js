import React from 'react';
import Cafe from '../mainbody/cafe';
import Dailygoods from '../mainbody/dailygoods';
import Textile from '../mainbody/textile';
import Others from '../mainbody/others';
import Home from '../mainbody/home';
import {Route, Switch} from 'react-router-dom';

const MainBody = ({_cafeHome, _exitCafeHome}) => {
    return(
        <div className='mainbody'>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route path='/cafe'><Cafe _cafeHome={_cafeHome} _exitCafeHome={_exitCafeHome}/></Route>
                <Route exact path='/dailygoods' component={Dailygoods}/>
                <Route exact path='/textile' component={Textile}/>
                <Route exact path='/others' component={Others}/>
                <Route exact path='/'>Not Found... </Route>
            </Switch>
        </div>
    )
}

export default MainBody;
