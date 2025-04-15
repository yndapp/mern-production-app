import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='text-amber-700'>Vite + React + MongoDB + Express + Node.js</h1>
      <div className="card">
        <button className='border-amber-500 bg-cyan-600 p-4' onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  )
}

export default App
