module.exports = {


  friendlyName: 'Send email',


  description: 'Send an email, either in plaintext or from an HTML template.',


  extendedDescription:
  'This method is implemented using the `nodemailer` package, and sends emails via SMTP.\n'+
  'See `tests/test.js` for example usage.',


  moreInfoUrl: 'https://github.com/andris9/Nodemailer',


  inputs: {

    customTransport: {
      friendlyName: 'Custom transport',
      description: 'A nodemailer "service module" to use for sending the email.',
      example: 'nodemailer-stub-transport',
      whereToGet: {
        url: 'https://github.com/andris9/Nodemailer#available-transports'
      },
      required: false
    },

    auth: {
      friendlyName: 'Credentials',
      description: 'Authentication metadata for the provided service.',
      extendedDescription: 'e.g: `{user: \'username\', pass:\'password\'}`',
      whereToGet: {
        url: 'https://github.com/andris9/Nodemailer'
      },
      example: {},
      required: true
    },

    service: {
      description: 'The name of a service to use for SMTP delivery.',
      extendedDescription: 'Any of the services supported by `nodemailer` may be used.',
      whereToGet: {
        url: 'https://github.com/andris9/nodemailer-wellknown',
        description: 'Use any of the string identifiers from the list of `nodemailer`\'s "well-known services".',
        extendedDescription: 'Be sure to also look up and include any other necessary configuration to authenticate with the service in the `auth` dictionary.',
      },
      example: 'gmail',
      required: true
    },

    mail: {
      description: 'A dictionary describing your email message and associated metadata (from, to, ...).',
      extendedDescription: 'See tests/test.js for an example.',
      whereToGet: {
        url: 'https://github.com/andris9/Nodemailer'
      },
      example: {},
      required: true
    }

  },


  exits: {

    success: {
      description: 'The email was sent successfully.',
    }

  },


  fn: function (inputs,exits) {
    var h = require('../lib/helper');
    if (inputs.mail.templatesDir) {
      h.sendWithTpl(inputs, exits);
    } else {
      //console.log("simple mail");
      h.sendMail(inputs, exits);
    }
  }


};
