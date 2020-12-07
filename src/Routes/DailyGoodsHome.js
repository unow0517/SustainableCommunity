import React from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import jiguimage from 'image/dailygoods/jigu/jigutitle.png'
import Jigu from 'dailygoods/jigu'
const dailyGoodsObject ={
  list: [
    { name:'jigu', image: jiguimage},
  ],
  all: function(){return this.list},
}


const FullDailyGoods = (props) => {
  return (
    <div>
      <ul className='homebody'>
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
  const URL=props.location.pathname;
   if(URL === '/dailygoods/jigu'){
    return <div><Jigu {...props}/></div>
  } 
    return <div>Sorry, that's not here yet</div>
}
 
  


const DailyGoodsHome = (props) => {
  var currentLocation = props.location.pathname;
  return (
    <div >
      <div className='location'>{currentLocation}</div>
      <Switch className ="homebody">
        <Route exact path='/dailygoods' render={
          () => <FullDailyGoods {...props}/>}
        />
        <Route path='/dailygoods/:name' render={
          () => <DailyGoods {...props}/>}
        />
      </Switch>
    </div>
  )
} 

export default DailyGoodsHome;