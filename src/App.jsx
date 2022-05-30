import { useState } from 'react'
import logo from './logo.svg'
import './App.css'
import { useSelector } from 'react-redux'
import { Navigate, Route, Router, Routes } from 'react-router-dom'

import { Navbar } from './Components/navbar/Navbar';
import SignIn from './Components/login/SignIn'

import { JobPost } from './Components/jobPost/JobPost'
import { JobsShow } from './Components/jobshow/jobshow'
import { Home } from './Components/home/Home'
import SignUp from './Components/login/SingUp'

function App() {
  const [count, setCount] = useState(0)
  const loading =  useSelector((store)=>store.loading);
  const isAuthenticated = useSelector((store)=>store.isAuthenticated);
  console.log(isAuthenticated)


  const PrivateRoute = ({isAuthenticated,children}) =>{
    return isAuthenticated? children :<Navigate to={'/login'}/>
  }
  return (

    <div className="App">
  

          <Navbar/>
<div style={{marginTop:"100px"}}>
        <Routes>
          <Route path={"/"} element={
            <PrivateRoute isAuthenticated={isAuthenticated}>

              <Home/>
            </PrivateRoute>
          
          }/>
          <Route path='/login' element={<SignIn/>}/>
          <Route path='/register' element={<SignUp/>}/>
          
          <Route path="/jobpost" element={
          <PrivateRoute isAuthenticated={isAuthenticated}>
            <JobPost/>
          </PrivateRoute>
          }/>

          <Route path="/jobshow" element={<JobsShow/>}/>
        </Routes>

</div>
    </div>
  )
}

export default App;

          
        

