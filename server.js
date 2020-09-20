
// import express module dependencies 
const express = require('express'); 

// import handlebars module dependencies
const exphbs = require('express-handlebars'); 

// set the port using this format which allows for port to be set be Heroku 
const PORT = process.env.PORT| 8080; 

// create an instance of the express app 
const app = express(); 

// set up middleware to handle data parsing 
app.use(express.urlencoded({extended: true})); 
app.use(express.json); 

// set up handlebars and default template engine 
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');

// set up PORT listener 
app.listen(PORT, () =>{
    console.log("Server Listening on" + PORT); 
});