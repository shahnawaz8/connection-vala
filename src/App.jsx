import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)
  const loading =  useSelector((store)=>store.loading);
  console.log(loading)
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={"home"}/>
        </Routes>
    </div>
  )
}

export default App
