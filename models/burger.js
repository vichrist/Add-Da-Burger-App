// pulling in the orm.js file 
const orm = require('..//config/orm'); 

// code that will execute the orm functions from the orm.js file 
const burger = {
    selectAll: function(cb) {
        orm.selectAll('burgers', (result) =>{
            cb(result);
        });
    }, 

    insertOne: function(columns, values, cb) {
        orm.insertOne('burgers', columns, values, (result) =>{
            cb(result); 
        });
    }, 

    updateOne: function(columns, values, cb) {
        orm.updateOne('burgers', columns, values, (result) =>{
            cb(result); 
        });
    }, 
};

// exporting the burger.js file 
module.exports = burger; 