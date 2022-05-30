import axios from "axios"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import './home.css'


export const Home=()=>{
    const [data,setdata]=useState([])
    const navigate = useNavigate();
    const getdata=()=>{
        axios.get("https://connection-vala-jobs.herokuapp.com/postjobs")
        .then((res)=>{
            setdata(res.data)
        })
    }
    useEffect(()=>{
        getdata()
    },[])
    console.log(data)
    return(
            <>
            <button onClick={()=>navigate("/jobpost")} className="createjob">Create a Job</button>
            <div className="home-container">
                
                {data?.map((el)=>
                      <div className="childmain">
                          <h1 style={{display:'inline'}}>{el.job_title}</h1><span>{el.createdAt}</span><br />
                          <div className="exp">{el.experienced}</div>
                          <div className="exp">{el.offered_amount}</div>
                          <div className="tag">
                             <p> Workplace Policy : {el.workplace_policy}</p>
                             <p> job_opening : {el.job_opening}</p>
                             <p> gender : {el.gender}</p>
                             <p> Type : {el.Employement_type}</p>
                             <p> Company : {el.About_company}</p>
                          </div>
                          <div className="desc">
                                {el.job_detail}
                          </div>

                          <span style={{color:'grey'}}>{el.location}</span>
                        <button style={{'marginLeft':'75%'}}>Easy Apply</button>
                      </div> 
                            
                       
                    )}
     </div>
                    </>
    )
}
