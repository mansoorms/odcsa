var express = require('express'),
    router = express.Router(),
    Response = require('./response')




// Get list of all tickets
router.get('/', function(req, res) {

});

//Get details of a ticket
router.get('/:ticketID', function(req, res) {

});

//Delete a specific ticket
router.delete('/:ticketID', function(req, res) {

});

 //Create a new ticket
router.post('/', function(req, res){

});


module.exports = router;
