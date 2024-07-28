const Contact = require("../models/contact-model");
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");

const home = async(req, res) => {
    try{
        res.status(200).send("we are getting response from router by controller");
    }
    catch(error){
        console.log(error);
    }
}
const register = async(req, res) => {
    try{
        console.log(req.body);
        const {username, email, phone, password} = req.body;

        const userexist = await User.findOne({ email: email});

        if(userexist){
            return res.status(400).json({ message : "user exist already"});
        }

        const hashpassword = await bcrypt.hash(password,10);

        const usercreated = await User.create({
            username, 
            email, 
            phone, 
            password : hashpassword,
        });

        res.status(200).json({ 
            msg: "user created successfully", 
            token: await usercreated.generateToken(), 
            userId: usercreated._id.toString(),
        });

    }
    catch(error){
        console.log(error);
        res.status(500).json("internal server error");
    }
}

const login = async (req, res) => {

    try{

        const { email, password } = req.body;

        const userexist = await User.findOne({ email });

        if(!userexist){
            return res.status(401).json({ message : "User doesn't exist" });
        }

        const user = await bcrypt.compare(password, userexist.password);

        if(user){
            return res.status(200).json({
                msg : "login successfully done !!",
                token : await userexist.generateToken(),
                userId: userexist._id.toString(),
            })
        }
        else{
            return res.status(400).json({ message : "Invalid user password" });
        }

    }
    catch(error){
        console.log(error);
        res.status(500).json("internal server error");
    }
}

const user = async (req, res) => {

    try {
        
        const userdata = req.user;
        console.log(userdata);
        res.status(200).json({ userdata });

    } catch (error) {
        
        res.status(200).json({ message : error});
    }
}



module.exports = {home, register, login, user};