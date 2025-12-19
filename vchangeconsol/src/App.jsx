import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useRef } from 'react'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState("")

  const a = useRef(10);
  const handle = (e) => {
    setCount(e.target.value)
    console.log(count);
  }

  useEffect(() => {
    a.current = a.current + 1;
    console.log(a.current);
    
  }, [count])

  return (
    <>
      <input type="text" value={count} onChange={handle} />
    </>
  )
}

export default App
