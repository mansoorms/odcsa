var nodemailer = require('nodemailer');
var path = require('path');
var templatesDir = path.resolve(__dirname, '..', 'templates');
var emailTemplates = require('email-templates');
var EmailAddressRequiredError = new Error('No email address or subject  provided');


module.exports.sendemail = sendemail;

var defaultTransport = nodemailer.createTransport("SMTP",{
   service: "Gmail",  // sets automatically host, port and connection security settings
   auth: {
       user: "email@gmail.com",
       pass: "gmailPassword"
   }
});





function sendemail(templateName, locals, fn) {
	console.log(templateName);
	console.log(locals);
  if (!locals.email) {
    return fn(EmailAddressRequiredError);
  }
  if (!locals.subject) {
    return fn(EmailAddressRequiredError);
  }
  emailTemplates(templatesDir, function (err, template) {
    if (err) {
      return fn(err);
    }
    template(templateName, locals, function (err, html, text) {
      if (err) {
        return fn(err);
      }

      var transport = defaultTransport;
      console.log(transport);
      transport.sendMail({
        from: "arun@gmail.com",
        to: locals.email,
        subject: locals.subject,
        html: html,
        text: text
      }, function (err, responseStatus) {
        if (err) {
          return fn(err);
        }
        return fn(null, responseStatus.message, html, text);
      });
    });
  });
}
