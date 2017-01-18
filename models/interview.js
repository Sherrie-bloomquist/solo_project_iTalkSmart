var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var interviewSchema = new Schema ({
  question: String
});

var Interview = mongoose.model('interviews', interviewSchema);

module.exports = Interview;
