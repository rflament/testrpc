var mongoose = require('mongoose');

var Schema = mongoose.Schema,
  ObjectId = Schema.ObjectId;

var Account = new Schema({
  secretKey: { type: String },
  balance: { type: Number }
});


module.exports = Account;