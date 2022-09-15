import React, { useState } from 'react'
import Button from '../../Button/Button'
import '../RoomPopUp/Roomspop.css'
import InputComponent from './InputText/InputComponent'



const RoomPopUp = ({setAddroom}) => {
  const [Room , setRoom]=useState('')
  const [adult , setAdult]=useState('')
  const [child , setChild]=useState('')
  const [price, setPrice]=useState('')
  const sentData=(e)=>{
    e.preventDefault()
    console.log(Room,adult,child,price);
    setAddroom(false)
  }
  
  return (
    <div className='roomtablepop'>
    <div className='roomtitle2'>Rooms</div>

    <form method='post' onSubmit={sentData} >
    <InputComponent  text='Room Number' setState={setRoom}/>
    <InputComponent text='Adult Capacity' setState={setAdult}/>
    <InputComponent text='Children Capacity'setState={setChild}/>
    <InputComponent text='Price'setState={setPrice}/>
    <div className='pop-bttn'>
    <Button  text='Save'/> 
    <div>or</div>
    <div className='cancel' onClick={()=>{setAddroom(false)}}>Cancel</div>
    </div>
    </form>
    


    
    </div>
    

  )
}
export default RoomPopUp;