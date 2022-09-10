const { verfiyJWT, verfiyTokenAndAuthorization } = require("../middleware/verifyJWT");
const User = require('../models/User');

const router = require("express").Router();

router.put("/:id", verfiyTokenAndAuthorization, async (req, res) => {

    {/** Tested with POSTMAN
        > Tested with the JWT active and present > User Authenticated > successful 
        > Tested with the JWT not present > Failed > token not present > successful 
        > Tested with the JWT present but not valid > Failed > token not valid > successful 
**/}

    if (req.body.password) {
        req.body.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SEC).toString();
    };

    try {
        const user = await User.findOne({ _id: req.params.id }).exec();
        // if we do not get an id, returns ID not found(The User does not exist)
        if (!user) {
            return res.status(204).json({ "message": `No User Matches ID ${req.params.id}.` });
        }
        console.log("User Found, checking for udpates");
        // checking for the firstname and lastname to be submitted
        if (req.body?.userName) user.userName = req.body.userName;
        console.log(user.userName);
        if (req.body?.email) user.email = req.body.email;
        console.log(user.email);

        const result = await user.save();
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json(err);
    }

});

router.post("/userposttest", (req, res) => {
    const userName = req.body.userName;
    console.log(userName);
    res.send("Your username is: " + userName);
});


module.exports = router



