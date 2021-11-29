var mysql = require('mysql');
var db = mysql.createConnection({
  host:'localhost',
  user: 'nodejs',
  password: '8TU*#iwEOWziDEkr',
  port:3306,
  database: 'KYDB_NEW'
});

module.exports = db;