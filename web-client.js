const request = require('request');

const endpoint = 'https://api.github.com';

request.get({
  url: endpoint + '/repos/vmg/redcarpet/issues',
  qs: {
    state: process.argv[2]
  },
  headers: {
    'User-Agent': 'Lighthouse'
  },
  json: true
}, function (err, incomingMessage, responseBody) {
  if (err) {
    console.log(err);
    return;
  }
  // It's either this or add `json: true` to the options object above
  // var parsedResponse = JSON.parse(responseBody);
  console.log(responseBody);
});