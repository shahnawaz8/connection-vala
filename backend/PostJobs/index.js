const express = require('express')
const connect=require('./src/config/db.js')
const PostController=require('./src/controller/jobController.js')
const JobPost=require('./src/model/jobpost.js')
const app=express()
app.use(express.json())
app.use("/postjobs",PostController)

app.listen(4000,()=>{
    connect()
    console.log("listening on port 4000")
})