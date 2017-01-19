var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;
var SALT_WORK_FACTOR = 10;

var AdminSchema = new Schema({
  username: {type: String, required: true, unique: true},
  password: {type: String, required: true}
}); //end AdminSchema

//------must encrypt, salt and has the password------//
AdminSchema.pre('save', function(next){
  var user = this;

  if(!user.isModified('password')){
    return next();
  }

  bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt){
    bcrypt.hash(user.password, salt, function(err, hash){

      user.password = hash;
      next();
    });
  });
}); //end encrypt and salt

//compare passwords
AdminSchema.methods.comparePassword = function(candidatePassword, callback){
  bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
      if(err ? callback(err) : callback(null, isMatch));
  });
};

var Admin = mongoose.model('admin', AdminSchema);
module.exports = Admin;
