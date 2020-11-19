import {Route, Switch} from 'react-router-dom';
import Cafe from './cafe';
import Dailygoods from './dailygoods';
import Textile from './textile';
import Recycle from './recycle';

const Sidebar = () => {
  return ( 
    <div>
      <ul className = 'sidebar'>
        <li><a href="/cafe">카페</a></li>
        <li><a href="/dailygoods">생활용품</a></li>
        <li><a href="/textile">섬유</a></li>
        <li><a href="/recycle">재활용</a></li>
      </ul>
      <Switch>
        <Route path='/cafe' component={Cafe}/>
        <Route path='/dailygoods' component={Dailygoods}/>
        <Route path='/textile' component={Textile}/>
        <Route path='/recycle' component={Recycle}/>
        <Route path='/'>Not Found</Route>
      </Switch>
    </div>
  )
}

export default Sidebar;