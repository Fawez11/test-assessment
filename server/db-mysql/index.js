const mysql = require("mysql2");
const mysqlConfig = require("./config.js");


const connection = mysql.createConnection(mysqlConfig);

// Connect your database  


//Don't forget to export what is needed.