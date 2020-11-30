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
      <ul className='fullcafe'>
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
  const urlName=props.match.params.name;
   if(urlName === 'superbin'){
    return <div><Superbin/></div>
  } else if(urlName === '000gan'){
    return <div><ZeroDesign/></div>
  } 
    return <div>Sorry, that's not here yet</div>
}
 
  


const OthersHome = () => {
  var currentLocation =window.location.pathname;
  return (
    <div className ="cafehome">
      <div className='location'>{currentLocation}</div>
      <Switch>
        <Route exact path='/others' component={FullOthers}/>
        <Route path='/others/:name' component={Others}/>
      </Switch>
    </div>
  )
}

export default OthersHome;