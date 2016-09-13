const request = require('request');
const fs = require("fs");
require('dotenv').config();

var api_token = process.env['GITHUB_API_TOKEN'];


var owner = process.argv[2]
var repo = process.argv[3];

const endpoint = 'https://sammytam0430:' + api_token + '@api.github.com';

function getRepoContributors(repoOwner, repoName) {
  request.get({
    url: endpoint + '/repos/' + owner + '/' + repo + '/contributors',
    headers: {
      'User-Agent': 'sammytam0430'
    },
    json: true
  }, function (err, incomingMessage, responseBody) {
    if (err) {
      console.log(err);
      return
    }
    fs.mkdir('./avatars/',function(err) {
      if (err) {
      return console.error(err);
    }
  });
    responseBody.forEach(function(user) {
      var avatarUrl = user.avatar_url;

      request.get({
        url: avatarUrl
      }, function (err, response, body) {
        type = response.headers["content-type"].split('/')[1];
        var filePath = './avatars/' + user.id + '.' + type;
        downloadImageByURL(avatarUrl, filePath);
      });
    })
  })
}


function downloadImageByURL(url, filePath) {
  request.get(url).on('err', function(err) {
    console.log(err);
  })
  .pipe(fs.createWriteStream(filePath))
}

getRepoContributors();
