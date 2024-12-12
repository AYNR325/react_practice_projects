import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [Counter,setCounter]=useState(10)
  
// let Counter=15;
const addValue=()=>{
 
  if(Counter<20){
  setCounter(Counter+1);
  }else{
    alert("value is greater than 20,can't increase the Counter");
  }

}
const removeValue=()=>{
  
  if(Counter>0){
  setCounter(Counter-1);
  }else{
    alert("value is less than 0,can't decrease the Counter");
  }

}
  return (
    <>
      <h1>hello react</h1>
      <h2>Counter value:{Counter}</h2>
      <button onClick={addValue}>Add value {Counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {Counter}</button>
    </>
  )
}

export default App
