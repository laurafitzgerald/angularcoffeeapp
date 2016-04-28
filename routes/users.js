var User = require('../models/users');
var express = require('express');
var router = express.Router();

var mongoose = require('mongoose');
var uriUtil = require('mongodb-uri');

var mongodbUri = 'mongodb://ds015878.mongolab.com:15878/heroku_6m0p4wv0';
var mongooseUri = uriUtil.formatMongoose(mongodbUri);

var options =  {server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
  replset: { socketOptions: { keepAlive: 1, connectTimeoutMS : 30000 } },
  user: 'admin', pass: 'pass' };

mongoose.connect(mongooseUri,options);
var db = mongoose.connection;

db.on('error', function (err) {
  console.log('connection error', err);
});
db.once('open', function () {
  console.log('connected to database');
});



router.authenticate =  function(req,res,next){
  console.log("Inside authenticate " + req.body.username);
  User.find({"username": req.body.username}, function(err, user){
    if(err)
      res.json({message: 'User NOT found!', errmsg: err});
    else
      console.log(user.password==req.body.password);
      if(user.password===req.body.password) {
        res.send({message: "valid"});
      }else {
        res.send({message: "invalid"});
      }
  })


};

router.addUser = function(req, res, next){

    var user = new User();

    user.username = req.body.username;
    user.email = req.body.email;
    user.location = req.body.location;
    user.password = req.body.password;

    user.save(function(err){
      if(err)
        res.send(err);
      else
        res.json({message: 'User added!', data: user});

    })

};

router.getUsers = function(req, res, next){

  User.find(function (err, users) {
    if(err)
      res.send(err);
    res.json(users);

  })

};




module.exports = router;
