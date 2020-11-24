import React,{useState} from 'react';
import Title from './Layout/title';
import MainBody from './Layout/mainbody';
import Sidebar from './Layout/sidebar';


const App = () => {
  const [cafeHome, setCafeHome] = useState(false);
  const toCafeHome = () => {
    setCafeHome(true);
  }
  const exitCafeHome = () => {
    setCafeHome(false)
  }
  return (
    <div className='app'>
      <Title/>
      <Sidebar _toCafeHome = {toCafeHome} _exitCafeHome={exitCafeHome} />
      <MainBody _cafeHome = {cafeHome} _exitCafeHome={exitCafeHome} />
    </div>
  );
}

export default App;