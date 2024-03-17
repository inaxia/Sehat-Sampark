/* eslint-disable no-unused-vars */
import { useState } from 'react'
import Sidebar from "./components/Sidebar/index"
import Dashboard from "./components/Dashboard/index"
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import AddDoctor from './components/Dashboard/forms/AddDoctor'
import AddCamp from './components/Dashboard/forms/AddCamp'
import AddStaff from './components/Dashboard/forms/AddStaff'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter  className="">
      <div className="h-full bg-slate-300">
      
      {/* <Dashboard /> */}
      {/* <h1>hello</h1> */}
      {/* <Sidebar /> */}
      <Routes>
        <Route path='/' element={<Dashboard />} />
        <Route path='/add-doctors' element={<AddDoctor />} />
        <Route path='/add-camp' element={<AddCamp />} />
        <Route path='/add-staff' element={<AddStaff />} />
      </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
