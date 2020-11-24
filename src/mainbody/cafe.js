import React from 'react';
import thepickertitle from './cafe/image/thepicker/thepickertitle.png'
import bottlefactorytitle from './cafe/image/bottlefactory/bottlefactorytitle.jpg'
import earthustitle from './cafe/image/earthus/earthustitle.jpg'
import {Link, Route, Switch} from 'react-router-dom'
import ThePicker from './cafe/thepicker'
import BottleFactory from './cafe/bottlefactory'
import EarthUs from './cafe//earthus'

const Cafe = ({_toCafeHome, _cafeHome, _exitCafeHome}) => {
  return (
    <div>
      {_cafeHome === true ? 
        <>
        <Link to='cafe/thepicker' onClick = {_exitCafeHome}><img src={thepickertitle} alt='thepicker' className='symbol'/></Link>
        <Link to='cafe/bottlefactory' onClick = {_exitCafeHome}><img src={bottlefactorytitle} alt='bottlefactory' className='symbol'/></Link>
        <Link to='cafe/earthus' onClick = {_exitCafeHome}><img src={earthustitle} alt='earthus' className='symbol'/></Link>
        </> 
      : 
      <Switch>
      <Route exact path='/cafe/thepicker' component={ThePicker}/>
      <Route exact path='/cafe/bottlefactory'><BottleFactory/></Route>
      <Route exact path='/cafe/earthus'><EarthUs/></Route>
      </Switch>
      }
    </div>
  )
}

export default Cafe;