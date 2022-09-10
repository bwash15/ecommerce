const JWT = require("jsonwebtoken");


const verfiyJWT = (req, res, next) => {
    const authHeader = req.headers.token;

    if (authHeader) {
        console.log("AuthHeader Found");
        const token = authHeader.split(" ")[1];
        console.log(`Token Found: ${token}`);
        JWT.verify(token, process.env.JWT_SEC, (err, user) => {
            if (err) res.status(400).json("JWT token is not Authenticated for user");
            req.user = user;
            next();
        });
    } else {
        return res.status(401).json("User is not Authenticated");
    }
}

const verfiyTokenAndAuthorization = (req, res, next) => {
    verfiyJWT(req, res, () => {
        if (req.user.id === req.params.id || req.user.isAdmin) {
            next();
        } else {
            res.status(403).json("You Shall Not PASS!!!");
        }
    })
}


module.exports = { verfiyJWT, verfiyTokenAndAuthorization };



