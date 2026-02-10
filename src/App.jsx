import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <h1>My first Ever React App</h1>
      <div className="card">

        <p>
         Hello World! But in React.
        </p>
      </div>
      <p className="read-the-docs">
        I am so happy to have paid the price to be able to work with React from the off right from the start. 
      </p>
    </>
  )
}

export default App
