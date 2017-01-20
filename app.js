var express = require('express');
var app = express();
var path = require('path');
var router = express.Router();
var session = require('express-session');
var bodyParser = require('body-parser');
var port = process.env.PORT || 3000;
var mongoose = require('mongoose');
var passport = require('./strategies/adminStrategy');

//-----require routers--------//
var interviewRouter = require('./routes/interviewRouter');
var speechRouter = require('./routes/speechRouter');

//-----middleware----//
app.use(express.static('public'));
app.use(bodyParser.json());

app.use(session({
   secret: 'secret',
   key: 'user',
   resave: 'true',
   saveUninitialized: false,
   cookie: { maxage: 60000, secure: false }
}));

// Passport
app.use(passport.initialize());
app.use(passport.session());

//-------Routers------------//
// app.use('/', indexRouter);
app.use('/interview', interviewRouter);
app.use('/speech', speechRouter);

//----server listening--------//
app.listen(port, function(req, res){
  console.log('server listening on', port);
});

app.get('/', function(req, res){
  res.sendFile(path.resolve('public/views/index.html'));
}); //end base url


//------mongoDB connection-------//
var mongoURI = 'mongodb://localhost:27017/questionDB';
var MongoDB = mongoose.connect(mongoURI).connection;

MongoDB.on('error', function(err){
  console.log('mongodb connection error:', err);
});

MongoDB.once('open', function(){
  console.log('mongodb connection open!');
});
