var should = require('should')
  , email = require("../index.js");

describe('Example', function(){
  it('test with your access', function(done){
    var config = {
      service: 'gmail',
      auth: {
        user: 'myemail@gmail.com',
        pass: 'mypassowrd'
      },
      mail: {
        from: 'test@example.com',
        to: 'contact@test.fr',
        subject: 'Hello Mike!',
        text: "Yep, It's working."
      }
    };
    email.send(config).exec(function(err, result) {
      done();
    });


  });
});
