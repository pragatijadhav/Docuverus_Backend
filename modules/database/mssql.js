
const config = require("../../config");
var sql = require('mssql');


const con = new sql.ConnectionPool({
    server: config.databaseHost,
    user: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseDatabaseName
});


con.connect(function (err) {
    if (err) {
        console.log("err-", err);
        console.log("Error connecting to Database");
        return;
    }
    console.log("Connection established");
});

module.exports = con;