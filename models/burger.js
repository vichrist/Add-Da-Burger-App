const orm = require('..//config/orm'); 

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
    }
};

module.exports = burger; 