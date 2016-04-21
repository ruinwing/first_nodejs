function start(){
  console.log("Request handler 'start' was called.");

  function sleep(milliSeconds){
    var startTime = new Date().getTime();
    while(new Date().getTime() < startTime + milliSeconds);
  }
  // 10초간 기다려!
  sleep(10000);

  // 이 함수가 리턴 할 때까지 서버가 기다린다.
  return "Hello, World!";
}

function hello(){
  console.log("Request handler 'hello' was called.");
  return "Hello, Everyone!";
}

exports.start = start;
exports.hello = hello;
