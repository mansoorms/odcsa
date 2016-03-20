var express = require('express');
var passport = require('passport');
var router = express.Router();
var Strategy = require('passport-local').Strategy;



passport.use(new Strategy({
    passReqToCallback: true
  },
  function(req, username, password, cb) {

  }));

router.get('/login',
  passport.authenticate('local', {
    session: false
  }),
  function(req, res) {
    console.log('/login authentication successful');
  }
);


module.exports = router;
