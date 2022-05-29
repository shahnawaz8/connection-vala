import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { Route, Router, Routes } from 'react-router-dom'

import { Navbar } from './Components/navbar/Navbar';
import SignIn from './Components/login/SignIn'

import { JobPost } from './Components/jobPost/JobPost'

function App() {
  const [count, setCount] = useState(0)
  const loading =  useSelector((store)=>store.loading);
  console.log(loading)
  return (
    < className="App">
          <Navbar/>
        <Routes>
          <Route path='/' element={"home"}/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path="/jobPost" element={<JobPost/>}/>
          </Routes>
        </
