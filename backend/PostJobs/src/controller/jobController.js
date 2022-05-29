const  express =  require("express")
const JobPost=require('../model/jobpost.js')

const router =express.Router()

router.get("",async(req,res)=>{
    const postjobs = await JobPost.find().lean().exec()
    return res.status(200).send(postjobs)
   
  })


router.post("",async(req,res)=>{
  const postjobs=await JobPost.create(req.body)
  return res.status(200).send(postjobs)
})
module.exports=router;