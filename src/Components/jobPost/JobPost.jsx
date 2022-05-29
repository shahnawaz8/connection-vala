import axios from 'axios'
import { useState } from 'react'
import  './jobpost.css'
export const JobPost = ()=>{

    const [formValue, setformValue] = useState({
        job_title: '',
        job_detail: '',
        gender:'',
        Age:'',
        location:'',
        workplace_policy:'',
        offered_amount:'',
        Employement_type:'',
        experienced:'',
        job_opening:'',
        About_company:'',
        Company_name:''
      })

      const postdata=()=>{
          axios.post('')
      }
     

      const handleChange = (event) => {
        setformValue({
          ...formValue,
          [event.target.name]: event.target.value
        });
      }

      const handlesubmit = (e)=>{
          e.preventDefault();
            console.log(formValue)
            const obj1 = {
                "job_title":"Developer",
                "job_detail":"this is a front end job",
                "gender":"male",
                "Age":24,
                "location":"Delhi",
                "workplace_policy":"t&c",
                "offered_amount":"4lpa",
               "Employement_type":"full-time",
               "experienced":"1-3 year",
               "job_opening":20,
               "About_company":"2002 stablished year",
               "Company_name":"tcs"
            
            
            }
            axios.post("http://localhost:4000/postjobs",formValue)
            .then((res)=>console.log(res))
            .catch((err)=>console.log(err));
      }

console.log(formValue)
    return (
        <>
        <h2 className='heading'>Create Jobs</h2>
        <div className='container'>
            
        <form action="" onSubmit={handlesubmit}>
            <label>Job Title</label>
            <input className="inputbox"
             type="text"
             placeholder="job-type"
            name="job_title"
             value={formValue.job_title}

            onChange={(e)=>handleChange(e)}>

            </input>
            <br></br>
            
            <label>Job-Details</label>
            <input className="inputbox" type="text" placeholder="Job-Details" name='job_detail' onChange={handleChange}></input>
            <br></br>
            <label>Gender</label>
            <input className="inputbox" type="text" placeholder="Gender"
            name='gender' onChange={handleChange}></input>
            <br></br>
            <label>Age</label>
            <input type="Number" className="inputbox" placeholder="Age"
            name='Age' onChange={handleChange}></input>
            <br></br>
            <label>Location</label>
            <input className="inputbox" type="text"placeholder="Location"
            name='location' onChange={handleChange}></input>
            <br></br>
            <label>WorkPlace Policy</label>
            <input className="inputbox" type="text" placeholder="WorkPlace Policy"
            name='workplace_policy' onChange={handleChange}></input>
            <br></br>
            <label>Offered Amount</label>
            <input className="inputbox" type="text" placeholder="Offered Amount"
            name='offered_amount' onChange={handleChange}></input>
            <br></br>
            <label>Employement Type</label>
            <input className="inputbox" type="text"placeholder="Employement Type"
            name='Employement_type' onChange={handleChange}></input>
            <br></br>
            <label>Expericed Required</label>
            <input className="inputbox" type="text"placeholder="Expericed Required"
            name='experienced' onChange={handleChange}></input>
            <br></br>
            <label>Job Opening</label>
            <input className="inputbox" type="Number"placeholder="Job Opening"
            name='job_opening' onChange={handleChange}></input>
            <br></br>
            <label>About Company</label>
            <input className="inputbox" type="text"placeholder="About Company"
            name='About_company' onChange={handleChange}></input>
            <br></br>
            <label>Company's Name</label>
            <input className="inputbox" type="text"placeholder="Company's Name"
            name='Company_name' onChange={handleChange}></input>
            <br></br>
            <br></br>
            <button className='Button' >Post a job</button>
          
        </form>
        </div>
        </>
    )
}