var querystring = require("querystring");

function start(response){
  console.log("Request handler 'start' was called.");
  response.writeHead(200, {"Content-Type" : "text/plain"});

  var body = "<html><head><meta http-equiv='Content-Type' content='text/html; charset=UTF-8' /></head><body><form action = '/hello' method = 'post'><input type = 'text' name = 'text' /> <input type = 'submit' value = '입력' /></form></body></html>";

  response.writeHead(200, {"COntent-Type" : "text/html"});
  response.write(body);
  response.end();
}

function hello(response, postData){
  console.log("Request handler 'hello' was called.");
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("hello, " + querystring.parse(postData).text);
  response.end();
}

exports.start = start;
exports.hello = hello;
