var password = require('../../helpers/password');
var expect = require('expect.js');


describe('password', function(){
describe('testing generateHash', function () {
  it('should return a hashed password asynchronously', function (done) {

     var password1 = 'secret';
     password.generateHash(password1, function (passwordHash) {
     expect(passwordHash).not.to.eql(null);
     done();
     });
   });
});
});

describe('#verify() - compare a password with a hash', function() {
  it('should return true if the password matches the hash', function(done) {
    password.generateHash('P@ssw0rd!', function( passwordHash) {
      password.verifyHash('P@ssw0rd!', passwordHash, function(result) {
        expect(result).to.eql(true);
        done();
      });
    });
  });

  it('should return false if the password does not matches the hash', function(done) {
    password.generateHash('P@ssw0rd!', function(result) {
      password.verifyHash('password!', result, function(result1) {
        expect(result1).to.eql(false);
        done();
      });
    });
  });
});
