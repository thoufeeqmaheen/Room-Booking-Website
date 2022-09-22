import React, { useState } from 'react'
import Button from '../../Button/Button'
import '../RoomPopUp/Roomspop.css'
import InputComponent from './InputText/InputComponent'
import Selected from '../RoomPopUp/Amenities/Selected'


const RoomPopUp = ({setAddroom}) => {
  const [Room , setRoom]=useState('')
  const [adult , setAdult]=useState('')
  const [child , setChild]=useState('')
  const [price, setPrice]=useState('')
const[selectArray,setSelectArray]=useState([])



  const sentData=(e)=>{
    e.preventDefault()
    console.log(Room,adult,child,price);
    setAddroom(false)
  }
  
  return (
    
    <div className='roomtablepop'>

    <div className='roomtitle2'>Room {Room}
    
    <div className="close"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512" height='28' width='38'onClick={()=>{setAddroom(false)}} ><path d="M310.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L160 210.7 54.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L114.7 256 9.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 301.3 265.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L205.3 256 310.6 150.6z" /></svg></div>
    </div>

    <form method='post' onSubmit={sentData} >
    <InputComponent type='Number' text='Room Number'  setState={setRoom}/>
    <InputComponent type='Number' text='Adult Capacity' setState={setAdult}/>
    <InputComponent type='Number' text='Children Capacity'setState={setChild}/>
    <InputComponent type='Number' text='Price'setState={setPrice}/>
    <div className='pop-bttn'>
    <Button  text='Save'/> 
    </div>
    </form>
    <div className="ammn">
    <div className="addtitle">Amenities</div>
    {/* <div className="addamm">Add Amenities</div> */}
    {/* <form action="" method='post'className='amneties' >
    <input className='boxdesign'  type="text" placeholder='Add Amneties' />
    <Button text='+Add' className='admentiesbttn' />
    </form> */}
    
    <select className='addselect' onChange={(e)=>{setSelectArray([...selectArray,e.target.value])}}>
          <option >Select</option>
          <option value="Television">Teleivsion</option>
          <option value="A/C">A/C</option>
          <option value="Fridge">Fridge</option>
          <option value="Water Heater">Water Heater</option>
          <option value="Coffe Make">Coffe Maker</option>
          <option value="Extra Bed">Extra Bed</option>
          <option value="Crip">Crip</option>


        </select>

      </div>
      <div className='selectdata'>
        {selectArray.map((data, index) => {
          return (
            <Selected select={selectArray} data={data} key={index} index={index} setSelect={setSelectArray} />
          )
        })}
   
   </div>
    </div>
    

  )
}
export default RoomPopUp;