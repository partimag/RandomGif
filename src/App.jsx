import Random from "./components/Random";
import Tag from "./components/Tag";

import React from 'react'

function App() {
  return (
    <div className="w-full h-screen flex flex-col relative item-center
  ">
    <h1 className="bg-sky-400 rounded-lg text-4xl mx-auto mt-[25px] w-11/12 absolute  text-center px-10 py-3 ml-5 font-bold">
    
    Random GIF
    
    
    </h1>
    <div  className="flex flex-col w-full items-center gap-y-10 mt-[120px] ">



    <Random/>
    <Tag/>
    </div>
    
    
    
    
    </div>
  )
}

export default App
