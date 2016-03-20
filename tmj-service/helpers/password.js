var bcrypt   = require('bcrypt-nodejs');

module.exports.generateHash = generateHash;
module.exports.verifyHash = verifyHash;


function generateHash(password, callback) {
	var passhash = bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
    callback(passhash);
};

function verifyHash(password, hash, callback) {
	var pass = bcrypt.compareSync(password, hash);
	console.log(pass);
  callback(pass);
};
