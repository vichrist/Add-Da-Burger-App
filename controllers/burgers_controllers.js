// importing express module dependency 
const express = require('express'); 

// importing the burger.js file 
const burger = require('../models/burger'); 

// creating the router express function  
const router = express.Router(); 

// create the first GET route that calls the orm function selectALL and renders the data wihtin the burger object to the index.html homepage  
router.get('/', (req, res) => {
    burger.selectAll((data) => {
        let burgertable = {
            burgers: data
        };
        console.log("burgertable", burgertable); 
        res.render('index', burgertable);
    });
});

// create the second POST route that calls the orm function insertOne which allows us to add burger options  

router.post('/', (req, res)=>{

    burger.insertOne(['burger_name', 'devoured'], [req.body.burger_name, req.body.devoured], () => {

        res.redirect('/')
    });
});

// create the third PUT route that calls the orm function updateOne which allows us to update burger options

router.put('/:id', (req, res) => {

    let condition = 'id = ' + req.params.id; 

    console.log("condition", condition);

    burger.updateOne({

        devoured: req.body.devoured

    }, 
    condition, () => {
       
        res.redirect('/')
    });
});

// exporting the router 
module.exports = router; 