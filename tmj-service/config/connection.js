/**
 * 
 */
'use strict';
var mysql = require('mysql');

var Connection = {

    get: mysql.createConnection({
        host: 'localhost',
        port: '3306',
        user: 'root',
        password: 'admin',
        database: 'tntj_dev'})
}

module.exports = Connection
