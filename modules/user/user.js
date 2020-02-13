// const con = require('../database/mysql');
const con = require('../database/mssql');
const util = require('util');
const query = util.promisify(con.query).bind(con);
const functions = require('../common/functions');
const config = require('../../config');
const validator = require('validator');
const code = require('../common/code');
const message = require('../common/message');
const fs = require('fs');

class UserService {
  // API for user registration
  
}

module.exports = {
  userService: function() {
    return new UserService();
  }
};
