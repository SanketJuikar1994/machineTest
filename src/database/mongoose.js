const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/machineTest',{useNewUrlParser: true,},(error,response)=>{
    if(error){
        console.log("Database not connected")
    }else{
        console.log("connection successful")
    }
})