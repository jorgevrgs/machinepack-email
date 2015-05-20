var path = require('path')
  , should = require('should')
  , email = require("../index.js");

describe('test with your access', function(){
  xit('basic example', function(done){
    var config = {
      service: 'Gmail',
      auth: {
        user: 'contact@example.fr',
        pass: 'password'
      },
      mail: {
        from: 'contact@example.fr',
        to: 'contact@example.fr',
        subject: 'pfff..Hello the world!',
        text: "Eh what's happen...No, It's not working."
      }
    };
    email.send(config).exec(function(err, result) {
      console.log(err, result);
      done();
    });
  });

  xit('example with template engine', function(done){
    var config = {
      service: 'Gmail',
      auth: {
        user: 'contact@example.fr',
        pass: 'password'
      },
      mail: {
        from: 'contact@example.fr',
        to: 'contact@example.fr',
        subject: 'OK.... it is me!',
        templatesDir: path.resolve(__dirname, '..', 'samples'),
        folder: 'templates',
        params: {
          firstname: 'Mike'
        }
      }
    };
    email.send(config).exec(function(err, result) {
      console.log(err, result);
      done();
    });
  });

  it('should work with stub', function(done) {
    var config = {
      service: 'Stub',
      customTransport: 'nodemailer-stub-transport',
      auth: {},
      mail: {
        from: 'contact@example.fr',
        to: 'contact@example.fr',
        subject: 'pfff..Hello the world!',
        text: "Eh what's happen...No, It's not working."
      }
    };
    
    email.send(config).exec(function(err, result) {
      should.not.exist(err);
      
      result.should.have.property('messageId');
      result.should.have.property('response');
      
      done();
    })
  });
  
});
