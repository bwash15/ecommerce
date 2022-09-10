const router = require("express").Router();
const User = require("../models/User");


//REGISTER
router.post("/register", async (req, res) => {

    // if (!req?.body?.userName || !req?.body?.email || !req?.body?.password) {
    //     res.status(500).send("Not all fields are complete, please enter values for all fields")
    // }

    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: req.body.password,
    });

    try {
        // Send to DB
        const savedUser = await newUser.save();
        res.status(201).json(savedUser);
        console.log(savedUser);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router


