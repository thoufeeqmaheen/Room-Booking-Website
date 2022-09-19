import React from 'react'
// import Button from '../Button/Button'
const Box = ({data,inorout}) => {
  return (
    <div className='chkbox'>
    <div className='people'>
        <div className='names'>{data.name}</div>
        <div>{data.date}</div>
    </div>
    <div>{data.roomno}</div>
    <div></div>

    {/* <Button text={text} /> */}
    <div className='inorout'>{data.inorout}</div>
    

</div>



  )
}


export default Box