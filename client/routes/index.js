// 모든 라우터 파일은 이거랑 형식 똑같음

var express = require('express');
var router = express.Router();
var path = require('path')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname,'../dist/index.html'))
});

module.exports = router;
