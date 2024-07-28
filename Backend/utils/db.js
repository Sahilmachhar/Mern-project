const mongoose = require("mongoose");

const URL = process.env.MONGODB_URL;

const mongodb = async () => {

    try{
        await mongoose.connect(URL);
        console.log("Database connected successfully");
    }
    catch(error){
        console.log("Failed to connect database");
        process.exit(0);
    }

}

module.exports = mongodb;
