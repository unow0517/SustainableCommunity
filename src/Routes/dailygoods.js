import React from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import jigu from '../image/dailygoods/jigu/jigutitle.png'
import Jigu from '../dailygoods/jigu'
const dailyGoodsObject ={
  list: [
    { name:'jigu', image: jigu},
  ],
  all: function(){return this.list},
}


const FullDailyGoods = () => {
  return (
    <div>
      <ul className='fullcafe'>
        {dailyGoodsObject.all().map(c=>(
          <li key={c.name}>
           <Link to = {`/dailygoods/${c.name}`}><img src={c.image} className = 'icon' alt='cafeimage'/></Link>
          </li>
        ))}
    </ul>
    </div>  
  );
}


const DailyGoods = (props) => {
  const urlName=props.match.params.name;
   if(urlName === 'jigu'){
    return <div><Jigu/></div>
  } 
    return <div>Sorry, that's not here yet</div>
}
 
  


const DailyGoodsHome = () => {
  var currentLocation =window.location.pathname;
  return (
    <div className ="cafehome">
      <div className='location'>{currentLocation}</div>
      <Switch>
        <Route exact path='/dailygoods' component={FullDailyGoods}/>
        <Route path='/dailygoods/:name' component={DailyGoods}/>
      </Switch>
    </div>
  )
}

export default DailyGoodsHome;