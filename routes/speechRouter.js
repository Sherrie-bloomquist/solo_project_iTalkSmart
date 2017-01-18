var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Question = require('../models/speech');

//------------send question to database---------//
router.post('/', function(req, res){
  console.log('in question post');
  console.log('req.body', req.body);
  var sentData = req.body;

  var newQuestion = new Question({


  });
});
module.exports = router;
