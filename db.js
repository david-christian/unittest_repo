var mysql = require('mysql');
var db = mysql.createConnection({
  host:"192.168.34.23",
  user: "root",
  password: "123",
  database: "test"
});

module.exports = db;