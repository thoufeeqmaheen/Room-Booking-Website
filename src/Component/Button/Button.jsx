import React from 'react'

const Button = ({text,func}) => {
  return (
    <button className='bttn' onClick={func}>{text} </button>
  )
}

export default Button