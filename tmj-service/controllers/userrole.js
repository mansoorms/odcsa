var express = require('express'),
    router = express.Router(),
    Response = require('./response')
var constants = require('../config/constants');
var connection = require('../config/connection');
var _  = require('underscore');

 // Get list of all user roles
 router.get('/', function(req, res) {
   console.log("I am at get all roles");
   var _connection = connection.get;
   var _query = constants.SELECT_USERROLES;
   data = [];

   _connection.query(_query,

       function(err, rows, fields) {

           if(err) {
               data = [];
               data.push(err);
               res.json(Response.error(data));
           } else {
               _.each(rows, function(d) {
                   data.push(d);
               });
               res.json(Response.success(data));
           }

 });
 });

 //Delete a specific user role
 router.delete('/:rolename', function(req, res) {
   console.log('rolename' + req.params.rolename);
   var roleName = req.params.rolename;
   var _connection = connection.get;

   var query = _connection.query("DELETE from USER_ROLE where name = ?",[roleName], function(err, rows){
           if(err){
                console.log(err);
                return next("Mysql error, check your query");
           }
          res.sendStatus(200);
    });

 });

  //Create a new user role
 router.post('/', function(req, res){
   console.log(req.body.name);
   var data = {
       name:req.body.name
    };

    var _connection = connection.get;

    var query = _connection.query("INSERT INTO USER_ROLE set ? ", data, function(err, rows){
            if(err){
                 console.log(err);
                 return next("Mysql error, check your query");
            }
           res.sendStatus(200);
     });

 });

module.exports = router;
