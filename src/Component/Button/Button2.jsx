import React from 'react'

const Button2 = ({text,wid,classN,funcbtn,Bookroom}) => {
  return (
    <div>
   <button className={classN} width={wid} submit={Bookroom} onClick={funcbtn} >{text}  </button>
   </div>
 )
}

export default Button2