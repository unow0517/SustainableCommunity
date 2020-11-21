import thepickertitle from './image/cafe/thepicker/thepickertitle.png'
import bottlefactorytitle from './image/cafe/bottlefactory/bottlefactorytitle.jpg'
import earthustitle from './image/cafe/earthus/earthustitle.jpg'

const Cafe = () => {
  return (
    <div className='mainbody'>
      <img src={thepickertitle} alt='thepicker'/>
      <img src={bottlefactorytitle} alt='bottlefactory'/>
      <img src={earthustitle} alt='earthus'/>
    </div>
  )
}

export default Cafe;