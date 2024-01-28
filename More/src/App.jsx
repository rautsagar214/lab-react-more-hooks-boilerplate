import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tasklist from '../component/Tasklist'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Tasklist/>
    </>
  )
}

export default App
