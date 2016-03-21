var express = require('express'),
	router = express.Router(),
	Response = require('./response')
var constants = require('../config/constants');
var connection = require('../config/connection');
var _  = require('underscore');
var mailer = require('../helpers/email');


 // Get list of all users
 router.get('/', function(req, res) {
	  console.log("Get All User Details ");

   var _connection = connection.get;
   var _query = constants.SELECT_USERS;
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

 //Get user deatils
 router.get('/:userID', function(req, res) {
	   console.log("Get User Details");
	   var ipdata =req.query.username;
	   var _connection = connection.get;
	   console.log(ipdata);
	   var query = _connection.query('SELECT * from USERS where username=?',[ipdata], function(err, rows,fields){
		 data = [];
           if(err) {
               var data = [];
			   data.push(err);
               res.json(Response.error(data));
           } else {
					for (var i in rows) {
						console.log(rows[i]);
					  }
               _.each(rows, function(d) {
                   data.push(d);
               });
               res.json(Response.success(data));
           }
		   });
		
 });

 //get all active users..
 router.get('/:activeStatus', function(req, res) {

 
 });
 
 //get all active users..
 router.get('/:roles', function(req, res) {

 
 });
 //get all center details..
 router.get('/:centers', function(req, res) {

 
 });
 

 //Delete a specific user
 router.delete('/:userID', function(req, res) {

 });

  //Create a new user
 router.post('/', function(req, res){
	 console.log(req.body.username,req.body.password,req.body.firstName,req.body.lastName,req.body.email,req.body.image,
	             req.body.active,req.body.lastLogin,req.body.lastActive,req.body.center,req.body.emailNotif,req.body.roles);
   console.log("User Creation Service");
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
	roles:req.body.roles,
	//createdDate:'CURRENT_DATE()'
	
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
