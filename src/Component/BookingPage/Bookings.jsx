import React from 'react'
import '../BookingPage/Booking.css'
import './Bookingtable/Bookingstable'
import Bookingstable from './Bookingtable/Bookingstable'

const Bookings = () => {
  return (
    <div className='bookingbox'>
        <div className='bookingtitlediv'>
        <div className='bookingtitle'>Bookings</div>
        <div className='newbknbtn'>New Booking</div>
        </div>
        <div>

            <Bookingstable/>
        </div>

        

        
    </div>
  )
}

export default Bookings