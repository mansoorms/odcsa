var token = require('../../helpers/token');
var expect = require('expect.js');


describe('Testing Token generation', function () {
  it('should return a hashed password asynchronously', function (done) {
    var data = 'secret';
    token.generate(data, function (toke) {
        expect(toke).to.eql('eyJhbGciOiJIUzI1NiJ9.c2VjcmV0.5IV3HS7G8DSOij-JMUeLBgz1YsBcOBmSLQ4Tp2B2RgI');
        done();
    });
  })
});

describe('Testing Token verification', function () {
  it('should return a boolean value if password matched', function (done) {
    var data = 'secret';
    token.generate(data, function (toke) {
      token.verify(toke).
  			then(function(decoded) {
            expect(decoded).to.eql(data);
            done();
          });
    });
  });
});
