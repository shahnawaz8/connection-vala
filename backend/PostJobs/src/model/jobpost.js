const mongoose = require("mongoose")

const postJobSchema= new mongoose.Schema({

    
    job_title:{type:String,required:true},
    job_detail:{type:String,required:true},
    gender:{type:String,required:true},
    Age:{type:Number,required:true},
    location:{type:String,required:true},
    workplace_policy:{type:String,required:true},
    offered_amount:{type:String,required:true},
    Employement_type:{type:String,required:true},
    experienced:{type:String,required:true},
    job_opening:{type:Number,required:true},
    About_company:{type:String,required:true},
    Company_name:{type:String,required:true}



},
{
    timestamps:true,
    versionKey:false
}
)


const JobPost = new mongoose.model("postjob",postJobSchema)

module.exports=JobPost;