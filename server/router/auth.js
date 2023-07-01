const express = require("express")
const user = require("../Model/userSchema");
const { reach } = require("yup");
const User = require("../Model/userSchema");
const router = express.Router();
router.get("/",(req,res)=>
{
    res.send("hellow from world")
})
router.post("/registration",async(req,res)=>
{
    const {name,email,phone,password,cpassword}  =req.body;
    try{
        const find = await user.findOne({email:email})
        if(!find)
        {
            const User = new user({name,email,phone,password,cpassword})
             await User.save();
             res.status(200).json({message:"sucesufully done"})
        }
        else{
            res.status(400).json({error:"email already exit"})
        }
    }
    catch(err)
    {
        res.status(400).json({error:`${err}`})
    }
})
router.post("/login",async(req,res)=>
{
    const {email,name} = req.body;
    const find = await user.findOne({email:email})
    if(find)
    {
        const match = (find.password === password)
        if(match)
        {
            res.status(200).json({message:"login done"})
        }
        else{
            res.status(400).json({error:"password incorrect"})
        }
    }
    else{
        res.status(400).json({error:"plz enter valid email"})
    }
})
module.exports = router;