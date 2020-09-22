const { connect } = require('http2');

// import mysql module 
const mysql = require('mysql'); 

// setup the connection 
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL); 
} else {
  connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: 'root',
    password: 'Lelamylove0221', 
    database: 'burgers_db'
  });  
};


// executing the connection 
connection.connect((err) => {
    if (err) {
    console.error("Error Connecting: " + err.stack); 
    return; 
}
    console.log("Successfully Connected as ID: " + connection.threadId); 
}); 


// exporting the connection file 
module.exports = connection; 
