// importing express module 
const express = require('express'); 

// importing the burger.js file 
const burger = require('..//models/burger'); 

// creating the router express function  
const router = express.Router(); 

// create the first GET route that calls the orm function selectALL and renders the data wihtin the burger object to the index.html homepage  
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let hasAll = {
            burgers:data
        };
        console.log("hasAll", hasAll); 
        res.render('index', hasAll);
    });
});

// create the second POST route that calls the orm function insertOne which allows us to add new values to the burger object keys listed below. The res.redirect will redirect the client to an extended URL

router.post('/', (req, res)=>{
    burger.insertOne([
        'burger_name', 'devoured'
    ], [
        req.body.burger_name, req.body.devoured
    ], () => {
        res.redirect('/');
    });
});

// create the third PUT route that calls the orm function updateOne which allows us to enter BOOLEAN value updates to the burger object key listed below. The res.redirect will redirect the client to an extended URL

router.put('/:id', (req, res) => {
    let updates = 'id = ' + req.params.id; 

    burger.updateOne({
        devoured: req.body.devoured
    }, updates, () => {
        res.redirect('/');
    });
});

// create the fourth DELETE route that allows user to delete 

router.delete('/:id', (req, res) => {
    let updates = 'id =' + req.params.id; 
    
    burger.delete(updates, () =>{
        res.redirect('/');
    });
});


// exporting the router 
module.exports = router; 