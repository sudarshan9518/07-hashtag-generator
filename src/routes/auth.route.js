const express = require("express");
const userModel = require("../models/user.model");


const router = express.Router()




router.post("/register", async (req, res)=>{
    const {username , password} = req.body;
 
    const existingUser =  await userModel.findOne({
        username
    })
    if(existingUser){
        return res.status(409).json({
            message : "try another username"
        })
    }
    if(!username){
        return res.status(400).json({
            message : "bad req ; username is not defined"
        })
    }
    const user = await userModel.create({
        username , password
    })

    res.status(201).json({
        message: "user created successfully!!"
    })


})













module.exports = router;