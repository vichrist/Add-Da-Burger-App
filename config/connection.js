const { connect } = require('http2');

// import mysql module 
const mysql = require('mysql'); 

// setup the connection 

const connection = mysql.createConnection({
    host: 'localhost', 
    port: 3306,
    user: 'root',
    password: 'Lelamylove0221', 
    database: 'burgers_db'
}); 

// connecting the connection 

connection.connect((err) => {
    if (err) {
    console.error("Error Connecting: " + err.stack); 
    return; 
}
    console.log("Successfully Connected as ID: " + connection.threadId); 
}); 


// exporting the connection 
module.exports = connection; 
