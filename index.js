//example for cookie
var http = require('http');
var cookie = require('cookie');
var server = http.createServer(function(req, res){
  console.log(req.headers.cookie);
  var cookies = {};
  if(req.headers.cookie !== undefined){
  cookies = cookie.parse(req.headers.cookie);
  }
  console.log(JSON.stringify(cookies.item1));
  res.writeHead(200, {
    'Content-Type':'text/html;charset=utf8',
    'Set-Cookie':['item1=choco', 'item2=cherry']
  });
  res.write('<h1>cookie 생성</h1>');
  res.end();
});
var port = 3000;
server.listen(port, function(){
  console.log('웹서버가 켜졌습니다. : ' + port);
});