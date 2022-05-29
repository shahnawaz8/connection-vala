const express = require('express')
const cors = require("cors");
const connect=require('./src/config/db.js')
const PostController=require('./src/controller/jobController.js')
const JobPost=require('./src/model/jobpost.js')
const app=express()
app.use(cors());
app.use(express.json())
app.use("/postjobs",PostController)

app.listen(4000,()=>{
    connect()
    console.log("listening on port 4000")
})