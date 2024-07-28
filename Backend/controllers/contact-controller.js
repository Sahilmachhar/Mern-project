const Contact = require("../models/contact-model");

const contact = async (req, res) => {

    try {

        const { username, email, message } = req.body;

        const createcontact = await Contact.create({
            username,
            email,
            message,
        })
        console.log(createcontact);

        res.status(200).json({ msg:"contact saved successfully"});
        
    } catch (error) {
        res.status(500).json({ msg : "Internal server error" });
    }
};

const getContact = async (req, res) => {

    try {
        
        const contactData = await Contact.find();

        if(!contactData){
            return res.status(404).json({ message: "There doesn't exist contact data"});
        }

        res.status(200).json(contactData);
        
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "There is internal error fetching contact data"});
    }
}

const deleteContact = async (req, res) => {

    try {
        
        const getid = req.params.id;

        await Contact.deleteOne({ _id: getid});

        res.status(200).json({ message: "Contact deleted successfully"});

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Internal error deleting contact"});
    }
}
module.exports = {contact, getContact, deleteContact};