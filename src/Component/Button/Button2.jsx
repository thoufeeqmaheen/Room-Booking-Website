import React from 'react'

const Button2 = ({text,wid,classN,funcbtn}) => {
  return (
    <div>
   <button className={classN} width={wid}  onClick={funcbtn} >{text}  </button>
   </div>
 )
}

export default Button2