import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")
  
  return (
    <div className='w-full h-screen'
    style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-md bg-white px-3 py-2 rounded-full'>
          <button className='bg-red-500 rounded-full px-4 py-2 outline-none' onClick={()=>{setColor("red")}}>Red</button>
          <button className='bg-blue-500 rounded-full px-4 py-2 outline-none' onClick={()=>{setColor("blue")}}>blue</button>
          <button className='bg-green-500 rounded-full px-4 py-2 outline-none' onClick={()=>{setColor("green")}}>green</button>
          <button className='bg-yellow-300 rounded-full px-4 py-2 outline-none' onClick={()=>{setColor("yellow")}}>yellow</button>
          <button className='bg-pink-500 rounded-full px-4 py-2 outline-none' onClick={()=>{setColor("pink")}}>pink</button>
          <button className='bg-violet-500 rounded-full px-4 py-2 outline-none' onClick={()=>{setColor("violet")}}>violet</button>
          <button className='bg-white rounded-full px-4 py-2 outline-none' onClick={()=>{setColor("white")}}>white</button>
          <button className='bg-black rounded-full px-4 py-2 outline-none text-white' onClick={()=>{setColor("black")}}>black</button>
        </div>
      </div>
    </div>
  )
}

export default App
