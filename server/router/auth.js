const express = require("express");
const User = require("../model/userSchema");
const router = express.Router();
router.get("/", (req, res) => {
    res.send("welcome to home")
    console.log("welcome to home page")
})
router.post("/registration", async (req, res) => {
    try {
        const { firstname, lastname, select, date, country, number, email, password } = req.body;
        const find = await User.findOne({ email: email });
        if (!find) {
            const user = new User({ firstname, lastname, select, date, country, number, email, password })
            await user.save()
        }
        else{
           console.log(Error)
        }

    }
    catch (err) {
        console.log(err)
    }


})

module.exports = router;