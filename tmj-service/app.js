var express = require('express'),
    bodyParser = require('body-parser'),
    cookieParser = require('cookie-parser'),
    passport = require('passport')

var router = express.Router();

initApp();

function initApp() {
  app = express(),
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: true
  }));
  app.use(cookieParser());
  app.use(passport.initialize());
  app.use('/tmtj/authenticate', require('./authentication/authenticate-local'));
  app.use(router);
  app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Credentials", true);
    next();
  });
}


  app.use('/tmj/api/v1/', require('./middlewares'));
  app.use(require('./controllers'));



process.on('SIGTERM', function() {
  console.log('Received SIGTERM');
  shutdown();
});

process.on('SIGINT', function() {
  console.log('Received SIGINT');
  shutdown();
});

function shutdown() {
  console.log('Shutting down');
  process.exit(0);
}

var server = app.listen(3000, function() {
	var host = server.address().address;
	var port = server.address().port;
	console.log('Minnow Application listening at http://%s:%s', host, port);
});
