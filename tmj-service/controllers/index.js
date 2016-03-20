var express = require('express'),
	router = express.Router();


//Authenticated Routes
router.use('/tmj/api/v1/center', require('./center'));
router.use('/tmj/api/v1/ticketpriority', require('./ticketpriority'));
router.use('/tmj/api/v1/ticketstatus', require('./ticketstatus'));
router.use('/tmj/api/v1/tickettype', require('./tickettype'));
router.use('/tmj/api/v1/userrole', require('./userrole'));


router.use('/tmj/api/v1/user', require('./user'));
router.use('/tmj/api/v1/ticket', require('./ticket'));

module.exports = router;
