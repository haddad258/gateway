var mysql = require('mysql');

var connection = mysql.createPool({
    connectionLimit: 100,
    host:'node13197-gateway-test.my.p4d.click',
    user:'root',
    password:'',
    database:'MSNapr89351',
    port: 3306,
    debug: false,
    multipleStatements: true
});

module.exports.connection = connection;