const express = require("express"),                     // import express module
    router = express.Router(),                          // get an instance of express router
    mongoClient = require("mongodb").MongoClient;       // get mongo client

// Connect to MongoDB
const connection = (closure) => {
    return mongoClient.connect('mongodb://localhost:27017/empdb', (err, db) => {
        if (err) return console.log(err);

        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response json
let response = {
    status: 200,
    data: [],
    message: null
};

// route to get all employee records from mongodb
exports.findAll = (req, res) => {
    connection((db) => {
        db.collection('empdata', (err, collection) => {
            collection.find().toArray( (err, items) => {
                res.send(items);
            });
        });
    });  
};

// route to create new employee record in mongodb
exports.addEmp = (req, res) => {
    let emp = req.body;
    console.log("Adding Employee: " + JSON.stringify(emp));
    connection((db) => {
        db.collection('empdata', (err, collection) => {
            collection.insert(emp, {safe: true}, (err, result) => {
                if (err) {
                    res.send({'error': 'An error has occurred'});
                } else {
                    console.log("Success: " + JSON.stringify(result[0]));
                    res.send(result[0]);
                }
            });
        });
    });
};

// route to delete particular employee record from mongodb
exports.deleteEmp = (req, res) => {
    let empToDelete = req.params.id;
    connection((db) => {
        db.collection('empdata', (err, collection) => {
            collection.remove({'id': empToDelete}, (err) => {
                res.send((err === null) ? { msg: '' } : { msg: 'error: ' + err });
            });
        });
    });
};

// route to update record of specific employee in mongodb
exports.updateEmp = (req, res) => {
    let id = req.params.id;
    let emp = req.body;
    connection((db) => {
        db.collection('empdata', (err, collection) => {
            collection.update({ 'id': id }, emp, (err, result) => {
                if (err) {
                    res.send({ 'error': 'An error has occurred' });
                } else {
                    console.log('Success: ' + JSON.stringify(result[0]));
                    res.send(result[0]);
                }
            });
        });
    });
};

// route to find specific employee record by id in mongodb
exports.findById = (req, res) => {
    let empId = req.params.id;
    connection((db) => {
        db.collection('empdata', (err, collection) => {
            collection.find({ id: empId }).toArray( (err, items) => {
                res.send(items);
            });
        });
    });
};