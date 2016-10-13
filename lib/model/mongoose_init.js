var mongoose = require('mongoose');

mongoose.Promise = require('bluebird');
const Account = require('./account');
mongoose.model('accounts', Account);
