import  './jobpost.css'
export const JobPost = ()=>{
    return (
        <>
        <h2 className='heading'>Create Jobs</h2>
        <div className='container'>
            
        <form action="">
            <label>Job Title</label>
            <input className="inputbox" type="text" placeholder="job-type"></input>
            <br></br>
            
            <label>Job-Details</label>
            <input className="inputbox" type="text" placeholder="Job-Details"></input>
            <br></br>
            <label>Gender</label>
            <input className="inputbox" type="text" placeholder="Gender"></input>
            <br></br>
            <label>Age</label>
            <input type="Number" className="inputbox" placeholder="Age"></input>
            <br></br>
            <label>Location</label>
            <input className="inputbox" type="text"placeholder="Location"></input>
            <br></br>
            <label>WorkPlace Policy</label>
            <input className="inputbox" type="text" placeholder="WorkPlace Policy"></input>
            <br></br>
            <label>Offered Amount</label>
            <input className="inputbox" type="text" placeholder="Offered Amount"></input>
            <br></br>
            <label>Employement Type</label>
            <input className="inputbox" type="text"placeholder="Employement Type"></input>
            <br></br>
            <label>Expericed Required</label>
            <input className="inputbox" type="text"placeholder="Expericed Required"></input>
            <br></br>
            <label>Job Opening</label>
            <input className="inputbox" type="Number"placeholder="Job Opening"></input>
            <br></br>
            <label>About Company</label>
            <input className="inputbox" type="text"placeholder="About Company"></input>
            <br></br>
            <label>Company's Name</label>
            <input className="inputbox" type="text"placeholder="Company's Name"></input>
            <br></br>
            <br></br>
            <button className='Button'>Post a job</button>
          
        </form>
        </div>
        </>
    )
}