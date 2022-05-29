const express = require('express')
const connect=require('./src/config/db.js')
const app=express()
app.use(express.json())

app.listen(4000,()=>{
    console.log("listening on port 4000")
})