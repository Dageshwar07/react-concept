import React, { useState } from 'react'
import './App.css'

const App = () => {
  const [counter, setCounter] = useState(1)

  function addValue() {

    { counter == 20 ? setCounter(20) : setCounter(counter + 1) }
  }
  function removeValue() {
    { counter <= 0 ? setCounter(0) : setCounter(counter - 1) }

  }

  return (
    <>


      <h2 className='text-3xl font-bold underline'> {counter}</h2>

      <button onClick={addValue}>

        add value
      </button>
      <br />
      <button onClick={removeValue}>
        remove value
      </button>
    </>)
}

export default App