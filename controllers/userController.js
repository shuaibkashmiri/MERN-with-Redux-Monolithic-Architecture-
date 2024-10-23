const User = require("../models/userModel");
const bcrypt=require("bcrypt")
const {messageHandler} = require("../utils/utils")


const registerHandler=async (req,res)=>{
    try {
        const{username,email,password}=req.body;
        if((!username||username==="")||(!email||email==="")||(!password||password==="")){
            return messageHandler(res,203,"All Credentials Required")
        }
        const existingUser=await User.findOne({email});
        if(existingUser){
            return messageHandler(res,203,"User Already Registered")
        }
        const hashpass= await bcrypt.hash(password,10);
        if(hashpass){
            await User.create({username,email,password:hashpass})
            return messageHandler(res,200,"User Saved Sucessfully")
        }
    } catch (error) {
        console.log("Server error" + error)
    }
}

module.exports={registerHandler}