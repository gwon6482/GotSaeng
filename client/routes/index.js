var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  console.log(path.join(__dirname,'../views/login.html'))
  res.sendFile(path.join(__dirname,'../views/login.html'))
});

module.exports = router;
