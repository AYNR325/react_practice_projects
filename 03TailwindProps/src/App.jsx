import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/card'

function App() {
  const [count, setCount] = useState(0)
  // let myObj={
  //   userName:"ayush",
  //   age:19
  // }
  // let arr=[1,2,3]
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Tailwind test</h1>
      <Card userName="firstcard" btnText="FirstButton" />
      <Card userName="secondcard" btnText="SecondButton" />
    </>
  )
}

export default App
