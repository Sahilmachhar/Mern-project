const jwt = require("jsonwebtoken");
const User = require("../models/user-model");

const authmiddleware = async (req, res, next) => {
        
        const token = req.header("Authorization");
        // console.log(token);

        if(!token){
            return res.status(400).json({ msg: "Anauthorized HTPP request, token not found"});
        }

        const webToken = token.replace("Bearer ", "");
        // console.log(webToken);

        const verifyToken = jwt.verify(webToken, process.env.JWT_SECRET_KEY);
        // console.log(verifyToken);

        try {

            const userData = await User.findOne({ email: verifyToken.email}).select({
                password: 0,
            });

            req.user = userData;
            req.token = token;
            req.userid = userData._id;
            
            next();
        } catch (error) {
            console.log(error);
            res.status(401).json({ msg : " Not getting database"});
        }

}

module.exports = authmiddleware;