var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'CoffeeMate Web App - with Mongo Backend' });
});

module.exports = router;
