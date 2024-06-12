const db = require("../db-mysql/index");
const userModel = require('../models/usersModel')

const getAllUsers = function (req, res) {
    userModel.getAll((err, users) => {
        if (err) {
            return res.status(500).json({ error: err.message });
        }
        return res.json(users);
    });
};


module.exports = { getAllUsers };