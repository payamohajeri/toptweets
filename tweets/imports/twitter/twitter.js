var Twit = require('twit');
var config = require('./config.js');

var T = new Twit(config);

var stream = T.stream('statuses/sample');

stream.on('tweet', function (tweet) {
  console.log(tweet);
});
