import React from 'react'
import { useState } from 'react'
import InputComponent from '../Addroom/RoomPopUp/InputText/InputComponent'
import Button from '../Button/Button'
import Button2 from '../Button/Button2'
import '../../Pages/Home.css'
import { useNavigate } from 'react-router-dom'
import apiCall from '../../../src/Services/apiCall'
// import { useEffect } from 'react'
const NewBookingsCmp = () => {

  // const [getavl,setGetavl]= useState(false)
  // const [bookok,setBook]=useState(false)
  const Navigate =useNavigate()
  const [room, setRoom] = useState(null)



 const [submitData, setsubmitData] = useState({
  guestFirstName:"",
  guestLastName:"",
  checkInDate:"",
  checkOutDate:"",
  numberOfAdults:"",
  numberOfChildren:""

 })

  // const [guest, setGuest] = useState('')
  // const [first, setFirst] = useState('')
  // const [chkin, setChkin] = useState('')
  // const [chkout, setChkout] = useState('')
  // const [adult, setAdult] = useState('')
  // const [Child, setChild] = useState('')




  const {guestFirstName,guestLastName,checkInDate,checkOutDate,numberOfAdults,numberOfChildren}=submitData
  const onChange = (value,key)=>{
    setsubmitData({
      ...submitData,
      [key]: value
    })
  }

  // const addBook=()=>apiCall("/booking","POST",submitData)

const book=async()=>{
  const booking=await addBook();
  console.log(booking);
  // setBook(true)
  setBooknow(true)

}

const formatBooking=()=>{
  return{
    ...submitData,
    checkInDate:new Date(submitData.checkInDate).toISOString(),
    checkOutDate: new Date(submitData.checkOutDate).toISOString(),
  }
}

const getAvailableroom=async()=>{
  let room=await getRooms();
  if(room.id){
    setRoom(room);
    console.log(room);
    setGetAvailableroom(true)
    setShow(true)
  }
}

const [Show, setShow] = useState(false)
  // const Bookroom =async(e)=>{
  //   e.preventDefault(); 
  //   console.log(submitData);
  //    let res=await addBook();
  
  // };

  const addBook=()=>apiCall("/booking","POST",{...formatBooking(),roomId:room.id,status:"Booked"})
  const getRooms=()=>apiCall("/get-rooms","POST",formatBooking())

  const [GetAvailableroom, setGetAvailableroom] = useState(false)
  const [Booknow, setBooknow] = useState(false)

  return (
    <div className='bookingbox' >
        <div className='bookingtitle'>New Bookings</div>
    
            <InputComponent value={guestFirstName} type='Text' text='Guest First Name' setState={(value)=>onChange(value,"guestFirstName") }/>
            <InputComponent value={guestLastName} type='Text' text='Guest Last Name' setState={(value)=>onChange(value,"guestLastName") }/>
            <InputComponent value={checkInDate} type='Date' text='Check In Date' setState={(value)=>onChange(value,"checkInDate") }/>
            <InputComponent value={checkOutDate} type='Date' text='Check Out Date' setState={(value)=>onChange(value,"checkOutDate") }/>
            <InputComponent value={numberOfAdults} type='Number' text='Number of Adult' setState={(value)=>onChange(value,"numberOfAdults") }/>
            <InputComponent value={numberOfChildren} type='Number' text='Number of Children' setState={(value)=>onChange(value,"numberOfChildren") }/>
            <div className="showget">
            {Show&& <div className="room">
              <div>Room</div>
              <div className="roomshow">{room.roomNumber}</div>
              <div>at</div>
              <div className="priceshow">{room.price}</div>
              <div>per night</div>
            </div> }
            </div>
            <div className='bookingbttns'>
              <div className='getbttn'>
                <div >
           { <Button text='Get Available Room' func={getAvailableroom} />}
            </div>
            
              <div>{GetAvailableroom && <div className='getbttn'> 
               <Button2 classN='bttn2' text='Book' funcbtn={book} />
                <div className='back' onClick={()=>{Navigate(-1)}} >Back</div> </div>}
                </div>
              
              </div>
              {Booknow && <div className='bttns' >
              <div className='bttn2'>Check In</div > <div className='bttn2'>Check Out</div> <div className='bttn2'>Cancel</div>

              </div>}
             
             
             
             
              </div>
    
            

        


    </div>
  )
}

export default NewBookingsCmp