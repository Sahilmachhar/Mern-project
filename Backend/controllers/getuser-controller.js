const User = require("../models/user-model");

const getAllUser = async(req, res) => {

    try {
        
        const getUser = await User.find({}, { password:0 });

        if(!getUser && getUser.length === 0){
            return res.status(404).json({ message: "There is no user exist."});
        }

        res.status(200).json(getUser);

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "There is internal error fetching user"});
    }

}

const deleteUser = async (req, res) => {

    try {
        
        const getid = req.params.id;

        await User.deleteOne({ _id:getid });

        return res.status(200).json({ message: "user deleted successfully"});
        
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "There is internal server error deleting user"});
    }
}

const findUserById = async(req, res) => {

    try {
        
        const id = req.params.id;

        const data = await User.findOne({ _id:id }, { password:0 });

        return res.status(200).json(data);

    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Internal server error finding user by id"})
    }
}

const upadateUserById = async (req, res) => {

    try {
        
        const getid = req.params.id;
        const updateUserData = req.body;

        const updatedData = await User.updateOne(
            { _id: getid},
            {
                $set: updateUserData
            }
        );

        res.status(200).json(updatedData);
        
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "Internal server error updating user"});
    }
}
module.exports = {getAllUser, deleteUser, findUserById, upadateUserById};