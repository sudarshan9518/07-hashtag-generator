const express = require("express");
const userModel = require("../models/user.model");
const jwt = require("jsonwebtoken")
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

    const token = jwt.sign({
        id : user._id
    },process.env.JWT_SECRET)


    res.cookie("token", token,{
        expires :  new Date(Date.now() + 7 * 24 * 60 * 60 * 1000)
    })

    res.status(201).json({
        message: "user created successfully!!"
    })


})













module.exports = router;