import { useState } from 'react'
import './App.css'

function App() {
  const [color, setColor] = useState("olive")



  return (
    <>
      <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>


        <button onClick={() => setColor('orange')} className="outline-none px-4" style={{ backgroundColor: "orange" }}> save change</button> 

        <button onClick={() => setColor('white')} className="outline-none px-4" style={{ backgroundColor: "white" }}> save change</button> 

        <button onClick={() => setColor('green')} className="outline-none px-4" style={{ backgroundColor: "green" }}> save change</button> 
        
        <button onClick={() => setColor('yellow')} className="outline-none px-4" style={{ backgroundColor: "yellow" }}> save change</button> 

     
      </div>
    </>

  )
}

export default App
