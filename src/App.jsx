import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'
import { JobPost } from './Components/jobPost/JobPost'
import { JobsShow } from './Components/jobshow/jobshow'

function App() {
  const [count, setCount] = useState(0)
  const loading =  useSelector((store)=>store.loading);
  console.log(loading)
  return (
    <div className="App">
  
        <Routes>
          <Route path='/' element={"home"}/>
          <Route path="/jobPost" element={<JobPost/>}/>
          <Route path="/jobshow" element={<JobsShow/>}/>
        </Routes>
    </div>
  )
}

export default App
