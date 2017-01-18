var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Speech = require('../models/speech');

//------------send speech question to the database---------//
router.post('/', function(req, res){
  console.log('in speech post');
  console.log('req.body', req.body);
  var sentData = req.body;

  var newSpeech = new Speech({
    question: req.body.question

  });
  newSpeech.save();
  res.send('ok');
});
module.exports = router;
