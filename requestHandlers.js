function start(response){
  console.log("Request handler 'start' was called.");
  setTimeout(function(){
    response.writeHead(200, {"Content-Type" : "text/plain"});
    response.write("hello Start");
    response.end();
  }, 10000);

}

function hello(response){
  console.log("Request handler 'hello' was called.");
  response.writeHead(200, {"Content-Type" : "text/plain"});
  response.write("hello, World!");
  response.end();
}

exports.start = start;
exports.hello = hello;
