const UserModel = require('../models/user.model');
const ObjectID = require('mongoose').Types.ObjectId;

module.exports.getAllUsers = async (req, res) => {
    const users = await UserModel.find().select('-password');
    res.status(200).json(users);
}

// Obtenir les informations de l'utilisateur lorsqu'il se connecte
module.exports.userInfo = async (req, res) =>{
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        const user = await UserModel.findById(req.params.id).select('-password').exec();
        if (!user) return res.status(404).send('User not found');
        res.send(user);
    } catch (error) {
        console.error('Error retrieving user info:', error);
        res.status(500).send('Internal Server Error');
    }
};

module.exports.deleteUser = async (req, res) => {
    console.log(req.params);
    if (!ObjectID.isValid(req.params.id))
        return res.status(400).send('ID unknown : ' + req.params.id)

    try {
        const result = await UserModel.deleteOne({ _id: req.params.id }).exec();
        if (result.deletedCount === 0) {
            return res.status(404).json({ message: "User not found." });
        }
        res.status(200).json({ message: "Successfully deleted." });
    } catch (error) {
        console.error('Error deleting user:', error);
        res.status(500).json({ message: "Internal Server Error" });
    }
}


