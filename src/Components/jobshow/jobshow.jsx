import axios from "axios"
import { useEffect, useState } from "react"
import './jobshow.css'


export const JobsShow=()=>{
    const [data,setdata]=useState([])
    const getdata=()=>{
        axios.get("http://localhost:4000/postjobs")
        .then((res)=>{
            setdata(res.data)
        })
    }
    useEffect(()=>{
        getdata()
    },[])
    console.log(data)
    return(
        
            <div className="">
                {data?.map((el)=>
                      <div className="Main">
                          <p>title:{el.job_title}</p>
                         
                          
                          <p>geder:{el.gender}</p>
                          <p>company:{el.Company_name}</p>
                          <p>location:{el.location}</p>
                      </div> 
                            
                       
                    )}
     </div>
        
    )
}