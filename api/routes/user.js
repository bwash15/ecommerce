const router = require("express").Router();

router.get("/usertest", (req, res) => {
    res.send("User Test is Successful");
});

router.post("/userposttest", (req, res) => {
    const userName = req.body.userName;
    console.log(userName);
    res.send("Your username is: " + userName);
});


module.exports = router



