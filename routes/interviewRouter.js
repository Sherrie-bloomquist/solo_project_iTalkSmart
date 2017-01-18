var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Interview = require('../models/interview');

//------------send interview question to the database---------//
router.post('/', function(req, res){
  console.log('in interview post');
  console.log('req.body', req.body);
  var sentData = req.body;
    console.log(req.body.question);

  var newInterview = new Interview({
    question: req.body.question

  });
  newInterview.save();
  res.send("ok");
});

module.exports = router;
