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
      <ul className='homebody'>
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
  const urlCafeName=props.location.pathname;
   if(urlCafeName === '/cafe/thepicker'){
    return <div><ThePicker {...props}/></div>
  } else if(urlCafeName === '/cafe/bottlefactory'){
    return <div><BottleFactory {...props}/></div>
  } else if(urlCafeName === '/cafe/earthus'){
    return <div><EarthUs {...props}/></div>
  } else {  
    return <div>Sorry, that's not here yet</div>
  }
}
 
  


const CafeHome = (props) => {
  var currentLocation = props.location.pathname;
  return (
    <div>
      <div className='location'>{currentLocation}</div>
      <Switch className="homebody">
        <Route exact path='/cafe' component={FullCafe}/>
        <Route path='/cafe/:name' render={(info)=>
          <Cafe {...props}/>}
        />
      </Switch>
    </div>
  )
}

export default CafeHome;