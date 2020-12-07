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
      <ul className='homebody'>
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
  const urlName=props.location.pathname;
   if(urlName === '/textile/greenbliss'){
    return <div><GreenBliss {...props}/></div>
  } 
    return <div>Sorry, that's not here yet</div>
}
 
  


const TextileHome = (props) => {

  var currentLocation =window.location.pathname;
  return (
    <div>
      <div className='location'>{currentLocation}</div>
      <Switch className ="homebody">
        <Route 
          exact path='/textile' 
          render={()=> <FullTextile {...props}/>}
        />
        <Route 
          path='/textile/:name' 
          render={()=><Textile {...props}/>}
        />
      </Switch>
    </div>
  )
}

export default TextileHome;