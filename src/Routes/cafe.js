import React from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import ThePicker from '../cafe/thepicker';
import BottleFactory from '../cafe/bottlefactory';
import EarthUs from '../cafe/earthus';
import thepicker from '../image/cafe/thepicker/thepickertitle.png'
import bottlefactory from '../image/cafe/bottlefactory/bottlefactorytitle.jpg'
import earthus from '../image/cafe/earthus/earthustitle.jpg'

const cafeObject ={
  list: [
    { name:'thepicker', image: thepicker},
    { name:'bottlefactory', image: bottlefactory},
    { name:'earthus', image: earthus}
  ],
  all: function(){return this.list},
}


const FullCafe = () => {
  return (
    <div>
      <ul className='fullcafe'>
        {cafeObject.all().map(c=>(
          <li key={c.name}>
           <Link to = {`/cafe/${c.name}`}><img src={c.image} className = 'icon' alt='cafeimage'/></Link>
          </li>
        ))}
    </ul>
    </div>  
  );
}


const Cafe = (props) => {
  const urlCafeName=props.match.params.name;
   if(urlCafeName === 'thepicker'){
    return <div><ThePicker/></div>
  } else if(urlCafeName === 'bottlefactory'){
    return <div><BottleFactory/></div>
  } else if(urlCafeName === 'earthus'){
    return <div><EarthUs/></div>
  } else {  
    return <div>Sorry, that's not here yet</div>
  }
}
 
  


const CafeHome = () => {
  var currentLocation =window.location.pathname;
  return (
    <div className ="cafehome">
      <div className='location'>{currentLocation}</div>
      <Switch>
        <Route exact path='/cafe' component={FullCafe}/>
        <Route path='/cafe/:name' component={Cafe}/>
      </Switch>
    </div>
  )
}

export default CafeHome;