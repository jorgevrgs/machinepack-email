module.exports = {

  friendlyName: 'Send',
  description: 'Send a email (SMTP)',
  extendedDescription: 'A simple use of nodemailer for sending email',

  inputs: {
    auth: {
      typeclass: '*',
      description: "an object, e.g: {user: 'username', pass:'password'}",
      required: true
    },
    service: {
      example: 'gmail',
      description: 'A service name (see https://github.com/andris9/nodemailer-wellknown for the listing)',
      required: true
    },
    mail: {
      typeclass: '*',
      description: "e.g: { from: 'test@test.com', to: 'test@test.fr', subject: 'Hello Mike!', text: 'Yep message..'}",
      required: true
    }
  },

  defaultExit: 'success',

  exits: {
    error: {
      description: 'Unexpected error occurred.',
    },
    success: {
      description: 'Done.',
    },
  },

  fn: function (inputs,exits) {
    var h = require('../lib/helper');
    if (inputs.mail.templatesDir) {
      h.sendWithTpl(inputs, exits);
    } else {
      console.log("simple mail");
      h.sendMail(inputs, exits);
    }
  },

};
