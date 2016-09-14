// FIXME: Small importance. Remove this file. It is not used in the.

var http = require("http");

function printExampleHTML(callback) {
  var requestOptions = {
    host: "example.com",
    path: "/"
  };
  http.get(requestOptions, (response) => {
    response.on("data", function(data) {
      console.log(data);
    });
    response.on("end", function() {
      console.log("Response stream complete.");
    });
  });
}



// var request = require("request");

// request("http://www.example.com", function(err, response, body) {
//   if (err) {
//     throw err;
//   }

//   console.log(body);

// });
