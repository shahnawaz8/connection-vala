import axios from 'axios'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { logout } from '../../redux/action'
import './navbar.css'
export const Navbar = ()=>{
    const navigate = useNavigate()
    const [city , setCity] = useState("Delhi");
    const dispatch = useDispatch();
    const isAuthenticated =  useSelector((store)=>store.isAuthenticated);

    const username =  useSelector((store)=>store.username);
    console.log(isAuthenticated)
    useEffect(()=>{
        let weatherKey ="bceb8ddaad70cd9238fe78ba73b4a210";
        getLocation()
        function getLocation() {
            if (navigator.geolocation) {
              navigator.geolocation.getCurrentPosition(showPosition);
            }
        }
        function showPosition(position) {
            axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${weatherKey}`).then((res)=>setCity(res.data.name))
        }
    },[])
    return(
        <>
            <header>
                <h1 id='logo' onClick={()=>isAuthenticated?navigate('/'):navigate("/login")}>Connection </h1> <span id='location'> <i className='fa fa-map-marker' style={{'color':'red'}}></i> {city?city:""} </span>
                <nav>
                    <ul className="nav_links">
                        <li>{isAuthenticated?<div><p>{username}</p> <p style={{'color':'rgba(0,136,169,0.8)'}} onClick={()=>{dispatch(logout())
                        console.log(isAuthenticated)
                        }}>Logout</p></div>:<p onClick={()=>navigate("/login")}>Login</p>}</li>
                        <li onClick={()=>navigate('/register')}>Register</li>
                    </ul>
                </nav>
                <input className='NavSearch' type="text" placeholder='Search here ...'/>
                <button> Contact </button>
            </header>
        
        </>
    )
}
