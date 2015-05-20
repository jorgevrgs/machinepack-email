module.exports = {

  sendWithTpl: function(inputs, exits) {
    var that = this;
    require('email-templates')(inputs.mail.templatesDir, function(err, template){
      if (err) return exits.error(err);
      template(inputs.mail.folder, inputs.mail.params, function(err, html, text) {
        inputs.mail.html = html;
        inputs.mail.text = text;
        that.sendMail(inputs, exits);
      });
    });
  },

  transport: function(inputs) {
    if (input.customTransport) {
      // inputs.customTransport = require('nodemailer-smtp-transport') - is possible Oo
      var options = input.customTransport(inputs);
      //var options = require('nodemailer-smtp-transport')(inputs);
    }
    return require('nodemailer').createTransport(options||inputs);
  },

  sendMail: function(inputs, exits) {
    var transporter = this.transport(inputs);
    transporter.sendMail(inputs.mail, function(err, result){
      transporter.close();
      if (err) return exits.error(err);
      return exits.success(result);
    });
  },

};
