var express = require('express'),
    router = express.Router(),
    Response = require('./response')
var connection = require('../config/connection');

 var mailer = require('../helpers/email');

 // Get list of all users
 router.get('/', function(req, res) {

 });

 //Get details of a user
 router.get('/:userID', function(req, res) {

 });

 //Delete a specific user
 router.delete('/:userID', function(req, res) {

 });

  //Create a new user
 router.post('/', function(req, res){
	 console.log(req.body.username,req.body.password,req.body.firstName,req.body.lastName,req.body.email,req.body.image,
	             req.body.active,req.body.lastLogin,req.body.lastActive,req.body.center,req.body.emailNotif,req.body.roles);
   console.log("I am hereasasasasas");
   var data = {
    username:req.body.username,
	password:req.body.password,
	firstName:req.body.firstName,
	lastName:req.body.lastName,
	email:req.body.email, 
	image:req.body.image, 
	active:req.body.active, 
	center:req.body.center, 
	emailNotif:req.body.emailNotif, 
	roles:req.body.roles 
    };

    var _connection = connection.get;

    var query = _connection.query("INSERT INTO USERS set ? ", data, function(err, rows){
            if(err){
                 console.log(err);
           res.sendStatus(500);
            }
           res.sendStatus(200);
     });



 });

module.exports = router;
