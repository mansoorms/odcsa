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
 
 
 //get user active status..
 router.get('/status/:au', function(req, res) {
 console.log("Get Active/Inactive Users",req.query.active);
	   var ipdata =req.query.active;
	   var _connection = connection.get;
	   console.log(ipdata);
	   var query = _connection.query('SELECT * from USERS where active=?',[ipdata], function(err, rows,fields){
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
 

 //Get user deatils
 router.get('/:userID', function(req, res) {
	   console.log("Get User Details",req.query.username);
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
 router.get('/role/:rl', function(req, res) {
	console.log("Get User Roles Details",req.query.role);
	
	 var ipdata =req.query.role;
	   var _connection = connection.get;
	   console.log(ipdata);
	   var query = _connection.query('SELECT * from USERS where role=?',[ipdata], function(err, rows,fields){
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
 //get all center details..
 router.get('/center/:cn', function(req, res) {
console.log("Get User Releated Center Details",req.query.center);
	
	 var ipdata =req.query.center;
	   var _connection = connection.get;
	   console.log(ipdata);
	   var query = _connection.query('SELECT * from USERS where center=?',[ipdata], function(err, rows,fields){
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
 

 //Delete a specific user
 router.put('/active/:ausr', function(req, res) {
	 console.log("Active a User",req.query.username);
	 var ipdata =req.query.username;
	 var _connection = connection.get;
	 console.log(ipdata);
	 var query = _connection.query('UPDATE USERS SET active ="yes" WHERE active ="no" and username = ?', [ipdata], function(err, rows){
		 if(err){
                 console.log(err);
           res.sendStatus(500);
            }
           res.sendStatus(200);
     });

 });
 
 router.delete('/delete/:dlusr', function(req, res) {
   console.log('Delete a Username : ',req.query.username);
   var ipdata =req.query.username;
   var _connection = connection.get;

   var query = _connection.query("DELETE from USERS where username = ?",[ipdata], function(err, rows){
	   
           if(err){
                console.log(err);
				console.log('ClientConnectionReady Error: ' + err.message);
                return next("Mysql error, check your query");
           }
		    console.log('Deleted: ' + rows.affectedRows + ' row');
           
          res.sendStatus(200);
    });

 });


  //Create a new user
 router.post('/', function(req, res){
	 console.log("User Creation Service");
	 console.log(
	             "\nusername:",req.body.username,
	             "\npassword:",req.body.password,
				 "\nfirstName:",req.body.firstName,
				 "\nlastName:",req.body.lastName,
				 "\nemail:",req.body.email,
				 "\nImage:",req.body.image,
	             "\nActive:",req.body.active,
				 "\nLast Login:",req.body.lastLogin,
				 "\nLast Active:",req.body.lastActive,
				 "\nCenter:",req.body.center,
				 "\nEmail Notification:",req.body.emailNotif,
				 "\nRole:",req.body.role
				 );
   
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
	role:req.body.role,
	//createDate:'NOW()'
	//createDate:req.body.createDate
	
    };

    var _connection = connection.get;

    var query = _connection.query("INSERT INTO USERS set createDate=NOW(), ? ", data, function(err, rows){
            if(err){
                 console.log(err);
				 console.log('ClientConnectionReady Error: ' + err.message);
                 res.sendStatus(500);
            }
			console.log('Inserted: ' + rows.affectedRows + ' row');
            console.log('Id inserted: ' + rows.insertId);
            res.sendStatus(200);
     });



 });

module.exports = router;
