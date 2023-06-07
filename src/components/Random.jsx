import React, { useEffect, useState } from 'react'
import Spinner from "./Spinner"
import UseGif from '../hooks/UseGif';
const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
function Random() {

const{gif,loading,fetchData}=UseGif()
   
  return (
    <div className='W- 1/2
     bg-green-500 rounded-lg border-black gap-y-5 mt-[40px] flex flex-col items-center'>
        
        <h1 className='text-2xl underline uppercase font-bold mt-[15px]'> A Random GIF </h1>
        {
            loading ? (<Spinner/>):(
        <img src={gif} width="450PX"/>

            )
        }
        <button onClick={()=>fetchData()}
         className='w-10/12 bg-yellow-300 text-lg py-2  mb-[20px] rounded-lg'>Generator</button>
        
       </div>
  )
}

export default Random