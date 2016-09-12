var http = require("http");

var requestOptions = {
  host: "example.com",
  path: "/"
};

http.get(requestOptions, (response) => {    // HTTP Response Callback

  response.setEncoding("utf8");             // Use UTF-8 encoding

  response.on("data", function(data) {           // On Data Received
    console.log(data);
  });

  response.on("end", function() {                // On Data Completed
    console.log("Response stream complete.");
  });

});


var request = require("request");

request("http://www.example.com", function(err, response, body) {
  if (err) {
    throw err;
  }

  console.log(body);

});
