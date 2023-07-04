const express = require('express')
const mongoose = require('mongoose')
const app = express();
app.use(require("./router/auth"))
app.use(express.json())

app.use(express.urlencoded({ extended: false }));
mongoose.connect("mongodb+srv://aaryamoktan2055:aarya@cluster0.4ic89p1.mongodb.net/").then(()=>
{
    console.log("sucessfull")
})
.catch((err)=>
{
    console.log(err)
})
const port = 5000
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))