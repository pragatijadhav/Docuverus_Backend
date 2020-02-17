const config = require("../../config");
var sql = require('mssql');


const conGroup = new sql.ConnectionPool({
    server: config.databaseHost,
    user: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseNameGroup
});


conGroup.connect(function (err) {
    if (err) {
        console.log("err-", err);
        console.log(`Error connecting to Database ${config.databaseNameGroup}`);
        return;
    }
    console.log(`Connection established to Database ${config.databaseNameGroup}`);
});

module.exports = conGroup;