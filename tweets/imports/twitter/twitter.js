var Twit = require('twit');
var config = require('./config.json');
var logit = require('node-logitio');

logit.init( config.logit.APIKey , { logToConsole: true } );
logit.log( 'hello, from basic node example' );

var T = new Twit(config.config);

var stream = T.stream('statuses/sample');

stream.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});
