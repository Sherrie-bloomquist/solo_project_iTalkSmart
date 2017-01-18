var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var speechSchema = new Schema ({
  question: String
});

var Speech = mongoose.model('speeches', speechSchema);

module.exports = Speech;
