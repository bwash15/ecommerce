const { verfiyJWT, verfiyTokenAndAuthorization, verfiyTokenAndAdmin } = require("../middleware/verifyJWT");
const User = require('../models/User');
const router = require("express").Router();

// UPDATE
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

// DELETE
router.delete("/:id", verfiyTokenAndAuthorization, async (req, res) => {

    try {
        if (!req?.params?.id) return res.status(400).json({ 'message': 'User ID required' });

        const user = await User.findOne({ _id: req.params.id }).exec();
        // if we do not get an id, returns ID not found(The user does not exist)
        if (!user) {
            return res.status(204).json({ "message": `user ID not found: ${req.params.id}.` });
        }

        const result = await user.deleteOne({ _id: req.body.id });
        res.status(200).json("User has been deleted...");

    } catch (err) {
        console.log(err);
    }
});

// GET USER -  Only Admin 
router.get("/find/:id", verfiyTokenAndAdmin, async (req, res) => {

    try {
        if (!req?.params?.id) return res.status(400).json({ 'message': 'user ID required.' });
        const user = await User.findOne({ _id: req.params.id }).exec();
        // if we do not get an id, returns ID not found(The user does not exist)
        if (!user) {
            return res.status(204).json({ "message": `No user Matches ID ${req.params.id}.` });
        }
        // user object returned in the doc object    
        const { password, ...others } = user._doc;
        res.status(200).json(others);
    } catch (err) {
        console.log(err);
    }
});

// // GET ALL USERS -  Only Admin 
// router.get("/", verfiyTokenAndAdmin, async (req, res) => {

//     try {
//         const users = await User.find();
//         // if we do not get an id, returns ID not found(The user does not exist)
//         if (!users) { return res.status(204).json({ "message": `No Users found...` }); };
//         res.status(200).json(users);
//     } catch (err) {
//         console.log(err);
//     }
// });

// GET ALL QUERIED USERS -  Only Admin 
router.get("/", verfiyTokenAndAdmin, async (req, res) => {
    const query = req.query.new;
    try {
        const users = query ? await User.find().sort({ _id: -1 }).limit(5) : await User.find();
        // if we do not get an id, returns ID not found(The user does not exist)
        if (!users) { return res.status(204).json({ "message": `No Users found...` }); };
        res.status(200).json(users);
    } catch (err) {
        console.log(err);
    }
});

// GET USER STATS
router.get("/stats", verfiyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));

    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project: {
                    month: { $month: "$createdAt" },
                }
            },
            {
                $group: {
                    _id: "$month",
                    total: { $sum: 1 },
                }
            }
        ])
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router



