var path = require('path')
  , should = require('should')
  , email = require("../index.js");

describe('test with your access', function(){
  it('basic example', function(done){
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

  it('example with template engine', function(done){
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

});
