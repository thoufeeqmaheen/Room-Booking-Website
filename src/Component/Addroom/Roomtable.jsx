import React from 'react'
import '../Addroom/Roomtable.css'
import Datatable from './Datatable'

const Roomtable = ({data,setEditbtn}) => {
  return (
   <div className='roomtabletitle'>
    <div className="mainroomtable">
    <div className='room3'>
    <div className='roomtext'>Room Number</div>
    <div className='roomtext'>Adult Capacity</div>
    <div className='roomtext'>Children Capacity</div>
    <div className='roomtext'>Price</div>
  
    </div>
    <div>
    <div className='roomtext'>Edit</div>
    </div>
    </div>
    <div className='list'>
    {data.map((data,index)=>{
        return(
            <Datatable data={data} key={index} setEditbtn={setEditbtn}/>

        )
    })}
    </div>
   </div>
  )
}

export default Roomtable