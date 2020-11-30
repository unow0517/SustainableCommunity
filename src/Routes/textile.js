import React from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import GreenBliss from '../textile/greenbliss'
import greenbliss from '../image/textile/greenbliss/greenblisstitle.png'

const textileObject ={
  list: [
    { name:'greenbliss', image: greenbliss},
  ],
  all: function(){return this.list},
}


const FullTextile = () => {
  return (
    <div>
      <ul className='fullcafe'>
        {textileObject.all().map(c=>(
          <li key={c.name}>
           <Link to = {`/textile/${c.name}`}><img src={c.image} className = 'icon' alt='cafeimage'/></Link>
          </li>
        ))}
    </ul>
    </div>  
  );
}


const Textile = (props) => {
  const urlName=props.match.params.name;
   if(urlName === 'greenbliss'){
    return <div><GreenBliss/></div>
  } 
    return <div>Sorry, that's not here yet</div>
}
 
  


const TextileHome = () => {
  var currentLocation =window.location.pathname;
  return (
    <div className ="cafehome">
      <div className='location'>{currentLocation}</div>
      <Switch>
        <Route exact path='/textile' component={FullTextile}/>
        <Route path='/textile/:name' component={Textile}/>
      </Switch>
    </div>
  )
}

export default TextileHome;