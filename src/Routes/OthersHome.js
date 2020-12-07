import React from 'react';
import {Link,Switch, Route} from 'react-router-dom';
import Superbin from '../others/superbin'
import ZeroDesign from '../others/000gan'
import superbin from '../image/others/superbin/superbintitle.png'
import zerodesign from '../image/others/zerodesign/zerodesigntitle.png'
const othersObject ={
  list: [
    { name:'superbin', image: superbin},
    { name:'000gan', image: zerodesign}
  ],
  all: function(){return this.list}
}


const FullOthers = () => {
  return (
    <div>
      <ul className='homebody'>
        {othersObject.all().map(c=>(
          <li key={c.name}>
           <Link to = {`/others/${c.name}`}><img src={c.image} className = 'icon' alt='cafeimage'/></Link>
          </li>
        ))}
    </ul>
    </div>  
  );
}

const Others = (props) => {
  console.log(props)
  const urlName=props.location.pathname;
   if(urlName === '/others/superbin'){
    return <div><Superbin {...props}/></div>
  } else if(urlName === '/others/000gan'){
    return <div><ZeroDesign {...props}/></div>
  } 
    return <div>Sorry, that's not here yet</div>
}

const OthersHome = (props) => {
  var currentLocation =window.location.pathname;
  return (
    <div>
      <div className='location'>{currentLocation}</div>
      <Switch className ="homebody">
        <Route 
          exact path='/others' 
          render={()=> <FullOthers {...props}/>}
        />
        <Route 
          path='/others/:name' 
          render={()=> <Others {...props}/>}
        />
      </Switch>
    </div>
  )
}

export default OthersHome;