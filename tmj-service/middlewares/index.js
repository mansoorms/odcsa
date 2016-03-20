var express = require('express'),
	router = express.Router();

router.use(require('./validateRequest'));

module.exports = router;
