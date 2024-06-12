const mysql = require("mysql2");
const mysqlConfig = require("./config.js");


const connection = mysql.createConnection(mysqlConfig);

// Connect your database  
connection.connect((err) => {
    if (err) {
        console.error("Error connecting to database:", err);
        return;
    }
    console.log("Connected to MySQL database!");
});

module.exports = connection;

//Don't forget to export what is needed.