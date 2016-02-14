<!-- this will serve as UI platform server-side scripting engine -->
<!-- initially will use nodejs, socket.io, react -->

var fs = require('fs');
var http = require('http');
var url = require('url') ;

http.createServer(function (req, res) {
  var queryObject = url.parse(req.url,true).query;
  console.log(queryObject);

  res.writeHead(200);
  res.end('Feel free to add query parameters to the end of the url');
}).listen(80);

var fs = require('fs'),
    http = require('http');

http.createServer(function (req, res) {
  fs.readFile(__dirname + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    res.writeHead(200);
    res.end(data);
  });
}).listen(80);
