import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import data from '../pages/NestedPags/data'


const DisplayMsg = () => {
    const[filterMsg,setFilterMsg]=useState('')
    const {id}=useParams()
     useEffect(()=>{
        const singleMsg=data.find((item)=>item.id===parseInt(id))
        console.log(singleMsg);
        setFilterMsg(singleMsg)
     },[id])
  return (
    <div>
        <h1>{filterMsg?filterMsg.msg:'error'}</h1>
    </div>
  )
}

export default DisplayMsg
