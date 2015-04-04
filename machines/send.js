module.exports = {

  friendlyName: 'Send',
  description: 'Simply send an email with nodemailer and email-template (SMTP)',
  extendedDescription: 'See tests/test.js for example',

  inputs: {
    auth: {
      typeclass: '*',
      description: "an object",
      extendedDescription: "e.g: {user: 'username', pass:'password'}",
      required: true
    },
    service: {
      example: 'gmail',
      description: 'A service name (see https://github.com/andris9/nodemailer-wellknown for the listing)',
      required: true
    },
    mail: {
      typeclass: '*',
      description: "Object of your mail (from, to, ...). See tests/test.js for example",
      extendedDescription: "e.g: {user: 'username', pass:'password'}",
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
