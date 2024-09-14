// controllers/userController.js
const User = require("../models/User");

// Create User
exports.createUser = async (req, res) => {
    const { name, email } = req.body;
    try {
        const user = await User.create({ name, email });
        res.status(201).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Get All Users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Update User
exports.updateUser = async (req, res) => {
    const { id } = req.params;
    const { name, email } = req.body;
    try {
        const user = await User.update({ name, email }, { where: { id } });
        res.status(200).json(user);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

// Delete User
exports.deleteUser = async (req, res) => {
    const { id } = req.params;
    try {
        await User.destroy({ where: { id } });
        res.status(204).send();
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};
