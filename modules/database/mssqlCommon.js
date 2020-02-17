const config = require("../../config");
var sql = require('mssql');


const conCommon = new sql.ConnectionPool({
    server: config.databaseHost,
    user: config.databaseUser,
    password: config.databasePassword,
    database: config.databaseNameCommon
});


conCommon.connect(function (err) {
    if (err) {
        console.log("err-", err);
        console.log(`Error connecting to Database ${config.databaseNameCommon}`);
        return;
    }
    console.log(`Connection established to Database ${config.databaseNameCommon}`);
});

module.exports = conCommon;