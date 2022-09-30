import React from 'react'

const DatasBooking = ({data}) => {
  return (
        <div className='datasbookings'>
            <div className='fstname'>{data.guestFirstName}</div>
            <div>{data.guestLastName}</div>
            <div>{data.room.roomNumber}</div>
            <div className='green'>{data.checkInDate}</div>
            <div className='red'>{data.checkOutDate}</div>
            <div className='orange'>{data.status}</div>



        </div>
  )
}

export default DatasBooking