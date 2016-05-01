var Coffee = require('../models/coffees');
var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');


var options =  {server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } },
user: 'admin', pass: 'pass' };

var mongodbUri = 'mongodb://ds015878.mongolab.com:15878/heroku_6m0p4wv0';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);


//mongoose.connect('mongodb://localhost:27017/coffeematedb');
mongoose.connect(mongooseUri,options);
var db = mongoose.connection;


db.on('error', function (err) {
    console.log('connection error', err);
});
db.once('open', function () {
    console.log('connected to database');
});



////////////////////////

router.findAll = function(req, res){

    Coffee.find({"username": req.params.username}, function (err, coffees) {
        if(err)
            res.send(err);
        res.json(coffees);

    })

};

router.findOne = function(req, res){

    Coffee.find({"_id": req.params.id}, function(err, coffee){
        if(err)
            res.json({message: 'Coffee NOT found!', errmsg : err});
        else
            res.json(coffee[0]);
    })


};


router.addCoffee = function(req, res) {
    var coffee = new Coffee();

    coffee.name = req.body.name;
    coffee.shop = req.body.shop;
    coffee.price = req.body.price;
    coffee.location_lat = req.body.location_lat;
    coffee.location_lng = req.body.location_lng;
    coffee.star = req.body.star;

    console.log('Adding coffee' + JSON.stringify(coffee));

    coffee.save(function(err){
        if(err)
            res.send(err)
        else
            res.json({ message: 'Coffee Added!', data: coffee });

    })
};

router.updateCoffee = function(req,res){

    var coffee = new Coffee();
    coffee.name = req.body.name;
    coffee.shop = req.body.shop;
    coffee.price = req.body.price;
    coffee.favourite = req.body.favourite;
    coffee.star = req.body.star;
    var id = req.params.id;
    Coffee.findOneAndUpdate({_id:id}, {$set : {"name": coffee.name, "shop": coffee.shop,  "price": coffee.price, "favourite" : coffee.favourite, "star": coffee.star  }}, {upsert: true},  function(err, coffee){
        if(err)
            res.send(err)
        else
            res.send("successfully saved");


    });


};

router.deleteCoffee = function(req, res){

    Coffee.findByIdAndRemove(req.params.id, function(err) {
        if (err)
            res.send(err);
        else
            res.json({ message: 'Coffee Deleted!'});
    });
};




module.exports = router;