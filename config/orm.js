const { table } = require('console');
// importing connection.js into the orm.js file 
const connection = require('../config/connection'); 

// methods that will execute the MySQL commands in the controllers 

const orm = {

    // selectAll() method 
    selectAll: function(table, cb) {
        var queryString = "SELECT ?? FROM ??";
        connection.query(queryString, function(err, result) {
            if (err) throw err; 
            console.log("Result for All", result); 
        });
    },

    // insertOne() method 
    insertOne: function(tableName, columns, values, cb) {
        var queryString = "INSERT INTO " + tableName; 

        queryString += " (";
        queryString += columns.toString();
        queryString += ") ";
        queryString += "VALUES (";
        queryString += printQuestionMarks(values.length);
        queryString += ") ";
    
        console.log("querystring", queryString);

        connection.query(queryString, values, (err, result) => {
            if (err) throw err; 
        });
        cb(result); 
    },

    // updateOne() method 
    updateOne: function(tableName, columns, values, cb) {
        var queryString = "UPDATE " + tableName;

        queryString += " SET ";
        queryString += columns(columns);
        queryString += " WHERE ";
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) throw err;  
        })
        cb(result); 
    }
};
// exporting the orm.js file 
module.exports = orm; 