var express = require('express')
var router = express.Router()
const studentModel = require('../model/student')
    
router.post('/saveUser',async(req,res)=>{
    try{
        const user = await studentModel.saveUser(req.body)
        res.status(200).send(user)
    }catch(e){
        res.status(400).send("User Already Registered!!!")
    }
}),

router.post('/login',async(req,res)=>{
    try{
            const userlogin =await studentModel.login(req.body)
            console.log("userlogin",userlogin)
           
            if(typeof(userlogin)==="object"){
                console.log("11111")
                res.status(200).send(userlogin)
            }
    }catch(e){
        console.log("2222")
        res.status(400).send("Unable to login!!!")
    }
}),
router.post('/logout',async(req,res)=>{
    try{
        userLogout =await studentModel.logout(req.body)
        res.status(200).send("User logged Out")
    }catch(e){
        res.status(400).send("Unable to logout")
    }
})

router.get('/getAllUser',async(req,res)=>{
    try{
        const user = await studentModel.getAllUser()
        res.status(200).send(user)
    }catch(e){
        res.status(500).send(e)
    }
}),

router.post('/getUser',async(req,res)=>{
    try{
               var user = await studentModel.getUser(req.body)
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
}),

router.post('/userUpdate',async(req,res)=>{
    try{
        const user = await studentModel.userUpdate(req.body)
        res.status(200).send(user)
    }catch(e){
        res.status(400).send(e)
    }
}),

router.post('/deleteUser',async(req,res)=>{
    try{
        const userDelete =await studentModel.userDelete(req.body)
        res.status(200).send(userDelete)
    }catch(e){
        res.status(400).send(e)
    }
})

module.exports = router