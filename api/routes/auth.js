const router = require("express").Router();
const User = require("../models/User");
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");


//REGISTER
router.post("/register", async (req, res) => {

    {/** Tested with POSTMAN - PASSED
        > Register with correct information > Username and Password > successful
        > Register with userName not entered > Invalid information > successful
        > Register with password not entered > Invalid information > successful

    **/}

    if (!req?.body?.userName || !req?.body?.email || !req?.body?.password) {
        res.status(400).send("Not all fields are complete, please enter values for all fields")
    };

    // Password is encrypted to a Hashed value, toString() 
    // gives us the written value of the encrypted password
    const newUser = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString(),
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

//LOGIN
router.post("/login", async (req, res) => {

    {/** Tested Login with POSTMAN - PASSED
        > Login with correct credentials > successful
        > Login with incorrect userName > Invalid Credentials > successful
        > Login with incorrect password > Invalid Credentials > successful

    **/}

    try {
        // Finding user
        const user = await User.findOne({ userName: req.body.userName });
        !user && res.status(400).json("Username is undefined, please enter a Username");

        // Decrypting user stored password
        const hashedPassword = CryptoJS.AES.decrypt(
            user.password,
            process.env.PASS_SEC
        );
        const pwd = hashedPassword.toString(CryptoJS.enc.Utf8);
        // Checking if the password entered in the REQ is the same  password stored in the DB
        pwd !== req.body.password && res.status(401).json("Invalid Credentials, check userName / password and try again");

        // All checks have been passed > Creating the JWT to authenticate the user

        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin,
        }, process.env.JWT_SEC,
            { expiresIn: "3d" }
        );

        // user object returned in the doc object    
        const { password, ...others } = user._doc;

        // Returning the user in the response 
        // without sending the password
        res.status(200).json({ ...others, accessToken });

    } catch (err) {
        console.log(err);
    };
});

module.exports = router


