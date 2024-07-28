const Service = require("../models/services-model");

const servicesData = async (req, res) => {

    try {
        
        const data = await Service.find();
        console.log(data);

        if(!data){
            return res.status(401).json({ msg: "data not found !!"});
        }

        res.status(200).json({ msg: data});

    } catch (error) {
        res.status(400).json({ msg: "Internal server error for services data" });
    }
}

module.exports = servicesData;