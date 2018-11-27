var mysql = require('mysql');
var connection = require('./connection.js');

module.exports = {
    selectAll: function(table, orderBy, direction, callback) {
        var queryString = 'SELECT * FROM ?? ORDER BY ??;';
        connection.query(queryString, [table, orderBy, direction], function(err,data) {
            if (err) {
                return console.log(err);
            }else{
                return callback(data);
            }
        });
    },
    insertOne: function(table, columns, values, callback) {
        var queryString = 'INSERT INTO ' + table + columns + ' VALUES (' + values + ')';
        connection.query(queryString, function(err, data) {
            if (err) {
                return console.log(err);
            }else{
                return callback(data);
            }
        });
    },
    updateOne: function(table, properties, selector, callback){
        var queryString = 'UPDATE ' + table + ' SET ' + properties + ' WHERE ' + selector;
        connection.query(queryString, function(err, data) {
            if (err) {
                return console.log(err);
            }else {
                return callback(data);
            }
        });
    }
};