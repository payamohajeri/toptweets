var Twit = require('twit');
var config = require('./config.json');
var logit = require('node-logitio');

logit.init( config.logit.APIKey , { logToConsole: true } );
logit.log( 'hello, from basic node example' );

var T = new Twit(config.config);

// var stream = T.stream('statuses/sample');

var stream_rouhani = T.stream('statuses/filter', { track: 'روحانی', language: 'fa' });
var stream_ghalibaf = T.stream('statuses/filter', { track: 'قالیباف', language: 'fa' });
var stream_ahmadinezhad = T.stream('statuses/filter', { track: 'احمدی‌نژاد', language: 'fa' });
var stream_raeisi = T.stream('statuses/filter', { track: 'رئیسی', language: 'fa' });

var stream_election1 = T.stream('statuses/filter', { track: 'انتخابات', language: 'fa' });
var stream_election2 = T.stream('statuses/filter', { track: 'تا1400باروحانی', language: 'fa' });
var stream_election3 = T.stream('statuses/filter', { track: 'انتخابات96', language: 'fa' });

stream_rouhani.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});

stream_ghalibaf.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});

stream_ahmadinezhad.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});

stream_raeisi.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});

stream_election1.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});

stream_election2.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});

stream_election3.on('tweet', function (tweet) {
  console.log(tweet);
  // logit.log("tweet", tweet);
});
