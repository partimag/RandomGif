import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from "./Spinner"
import UseGif from '../hooks/UseGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Tag() {
    const[tag,setTag]=useState("car")
const{gif,loading,fetchData}=UseGif(tag)    
   
  return (
    <div className='W- 1/2
     bg-blue-500 rounded-lg border-black gap-y-5 mt-[40px] flex flex-col items-center'>
        
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'> Random<br/>{tag} <br/>GIF </h1>
        {
            loading ? (<Spinner/>):(
        <img src={gif} width="450PX"/>

            )
        }
    
            <input vlaue={tag}  onChange={(event)=>setTag(event.target.value)} className='w-10/12  text-lg py-2  mb-[3px] text-center rounded-lg'/>
    
        <button onClick={()=>fetchData(tag)}
         className='w-10/12 bg-yellow-300 text-lg py-2  mb-[20px] rounded-lg'>Generator</button>
        
       </div>
  )
}

export default Tag