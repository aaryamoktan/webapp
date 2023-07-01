const express = require("express");
const mongoose = require("mongoose")
const dotenv = require("dotenv")
const app = express();
dotenv.config({path:'./config.env'})
const DB=process.env.DATABASE;
mongoose.connect(DB).then(()=>
{
    console.log("sucessfull")
})

app.use(require("./router/auth"))

app.listen(5000,()=>
{
    console.log("hello")
})