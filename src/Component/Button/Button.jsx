import React from 'react'

const Button = ({text,func,wid}) => {
  return (
    <div>
    <button className='bttn' onClick={func} width={wid} >{text}   </button>
    </div>
  )
}

export default Button