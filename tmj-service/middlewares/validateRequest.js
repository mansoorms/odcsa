var express = require('express'),
  router = express.Router(),
  jwt = require('jsonwebtoken'),
  Response = require('../controllers/response.js')




/**
 * Get the user from some session identifying information
 * plan to use token based authentication
 * so could get user id from a jwt cache of some sort
 *
 */
router.use(function(req, res, next) {
    next();
});


module.exports = router;
