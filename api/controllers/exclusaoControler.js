const ExclusaoUser = require('../models/UserExclusao');

const getUsers = async (req, res) => {
    try {
        const users = await ExclusaoUser.find();
        res.json(users);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

const createUser = async (req, res) => {
    const { name, numUsp, email } = req.body;
    const user = new ExclusaoUser({ name, numUsp, email });
    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

module.exports = {
    getUsers, createUser
};


