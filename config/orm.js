const { table } = require('console');
// importing connection.js into the orm.js file 
const connection = require('../config/connection'); 

function printQuestionMarks(num) {
    var arr = [];
  
    for (var i = 0; i < num; i++) {
      arr.push("?");
    }
  
    return arr.toString();
  }
  
  // Helper function to convert object key/value pairs to SQL syntax
  function columns(ob) {
    var arr = [];
  
    // loop through the keys and push the key/value as a string int arr
    for (var key in ob) {
      var value = ob[key];
      // check to skip hidden properties
      if (Object.hasOwnProperty.call(ob, key)) {
        // if string with spaces, add quotations (Lana Del Grey => 'Lana Del Grey')
        if (typeof value === "string" && value.indexOf(" ") >= 0) {
          value = "'" + value + "'";
        }
        // e.g. {name: 'Lana Del Grey'} => ["name='Lana Del Grey'"]
        // e.g. {sleepy: true} => ["sleepy=true"]
        arr.push(key + "=" + value);
      }
    }
  
    // translate array of strings to a single comma-separated string
    return arr.toString();
  }


// methods that will execute the MySQL commands in the controllers 

const orm = {

    // selectAll() method will grab all values from the table named burger 
    selectAll: (table, cb) => {
        var queryString = "SELECT * FROM " + table + ";";
        connection.query(queryString, (err, result) => {
            if (err) {
                console.error('ERROR', err.stack);
            } else { 
                console.log("selectAll", result);
            }     
        });
            cb(result); 
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
            if (err) {
                console.log("ERROR", err.stack); 
            } else { 
                console.log("insertOne", result);
            };
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
            if (err) {
                throw err; 
            } 
            cb(result); 
        });
    }
};
// exporting the orm.js file 
module.exports = orm; 