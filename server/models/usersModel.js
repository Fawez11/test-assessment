const db = require("../db-mysql/index");

const getAll = function(callback) {
    db.query("SELECT * FROM users", (err, results) => {
        if (err) {
            return callback(err, null);
        }
        return callback(null, results);
    });
};

module.exports = { getAll };
