const express = require('express')
const app = express()

const mongoose =require('./database/mongoose')
const studentController = require('./controller/student')

app.use(express.json())
app.use(studentController)

const port = process.dev || 6000

app.listen(port,(error,response)=>{
    if(error){
     return  console.log("Cannot connect to port")
    }
    console.log("Connected to port",port)
})