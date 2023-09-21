import { useEffect } from 'react'
import { useState, useCallback, useRef } from 'react'

const App = () => {
  const [length, setLength] = useState(8)
  const [copy, setCopy] = useState('copy')
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  const passwordFef = useRef(null)
  const PasswordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed) {
      str += '0123456789'
    }
    if (charAllowed) {
      str += "!@#$%^&*_+={}[]`~"
    }
    for (let i = 1; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass += str.charAt(char)

    }
    setPassword(pass)
  }, [
    length, numberAllowed, charAllowed, setPassword
  ])
  const copyPasswordToClipboard = useCallback(() => {

    setTimeout(() => {
      setCopy("copied")
      setTimeout(() => {
        setCopy("copy")

      }, 1000);
    },);


    passwordFef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])


  useEffect(() => {
    PasswordGenerator()
  }, [length, numberAllowed, charAllowed, PasswordGenerator])
  return (
    <>
      <div className=' w-full max-w-md mx-auto shadow-md rounded-lg px-8 my-3 text-orange-500 bg-gray-800'>
        <h1 className='text-white my-3 text-center'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>

          <input type='text' value={password} ref={passwordFef} className='outline-none w-full py-1 px-3' placeholder='password' readOnly />


          <button onClick={copyPasswordToClipboard} className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>{copy}</button>



        </div>
        <div className='flex text-sm gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input type='range'
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => {
                setLength(e.target.value)
              }}
            />
            <label>length : {length}</label>
          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={numberAllowed} id='numberInput' onChange={() => { setNumberAllowed((prev) => !prev) }} />

            <label className='numberInput'>Number</label>

          </div>
          <div className='flex items-center gap-x-1'>
            <input type='checkbox' defaultChecked={charAllowed} id='characterInput' onChange={() => {
              setCharAllowed((prev) => !prev)
            }}
            />
            <label className='characterInput'>characters</label>
          </div>
        </div>
      </div>

    </>)
}

export default App