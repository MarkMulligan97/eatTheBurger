var express = require("express");
var router = express.Router();
const burger = require('../models/burger.js');

// Import the model (cat.js) to use its database functions.
//var cat = require("../models/cat.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.getAll('burgers', function (data) {
        
        res.render('index', {
            burgers: data
        });
    })


});

router.post("/newburger", function (req, res) {
    burger.create('burgers', req.body.burgerName, function(data) {
        //console.log(data);
        res.redirect('/');
    });
});

router.put("/devour/:id", function (req, res) {
    burger.eat('burgers', true, req.params.id, function(data) {
        console.log(data);
        res.json({status: 202});
    })
});

module.exports = router;