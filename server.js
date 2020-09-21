// import over-ride module dependency 
var methodOverride = require('method-override')

// import express module dependency 
var express = require('express'); 

// import handlebars module dependency
var exphbs = require('express-handlebars'); 

// import path module dependency 
var path = require('path');

// set the port using this format which allows for port to be set by Heroku 
var PORT = process.env.PORT || 8080; 

// create an instance of the express app 
var app = express(); 

// set up middleware to handle data parsing 
app.use(express.urlencoded({extended: true})); 
app.use(express.json()); 

// set up middleware to override and use put methods by HTLM form 
app.use(methodOverride('_method'));

// set up middleware to allow for pulling in files 
app.use(express.static(__dirname + '/public'));

// set up handlebars and default template engine 
app.engine('handlebars', exphbs({defaultLayout: "main"}));
app.set('view engine', 'handlebars');


// permit access to the route files 
var routes = require ('./controllers/burgers_controllers');
app.use(routes);

// set up PORT listener 
app.listen(PORT, () =>{
    console.log('Server Listening on ' + PORT); 
});