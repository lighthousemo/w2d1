const request = require('request');
// FIXME: Medium importance.
// It is generally not recommended to include security credentials in code
// that is committed to the git repo. The code below contains your github API key.
// Instead, you can use an environment variable here to add in the API key.
// Look at the .env npm package for how to do that or just use node's process.env.
const endpoint = 'https://sammytam0430:34ee1829fc5cebe0af1c94c8675752819255fb4c@api.github.com';

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
