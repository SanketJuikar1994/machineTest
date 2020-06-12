const mongoose = require('mongoose')
const schema  = mongoose.Schema

const studentSchema = new schema({
    name:{
        type:String
    },
    
    email:{
        type:String,
        unique:true,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    mobile:{
        type:Number
    },
    accessToken:[{
        type:String,
        
    }]
})

const student= mongoose.model('Student',studentSchema)

module.exports =student