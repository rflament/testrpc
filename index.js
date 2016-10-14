var Interface = require('./lib/interface.js');

var TestRPC = {
  server: function(options, callback) {
    return Interface.server(options, callback);
  },

  provider: function(options, callback) {
    return Interface.provider(options, callback);
  }
}

module.exports = TestRPC;
