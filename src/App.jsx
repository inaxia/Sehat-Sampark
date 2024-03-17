/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Sidebar from "./components/Sidebar/index"
import Dashboard from "./components/Dashboard/index"
import './App.css'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div  className="bg-slate-300">
      <div className="h-full">
      <Sidebar />
      {/* <Dashboard /> */}
      {/* <h1>hello</h1> */}
    
      </div>
    </div>
  )
}

export default App
