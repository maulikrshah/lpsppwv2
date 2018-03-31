require('dotenv').config();

const sgMail = require('@sendgrid/mail');

//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

sgMail.setApiKey('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');

console.log('Sendgrid API:', process.env.SENDGRID_API_KEY);

//const msg = {

  //to: 'lpsminimart@verizon.net',

  //from: 'lpsminimart@sendgrid.com',

  //subject: 'Testing 3.31.1019',

  //text: 'testing setApi',

  //html: '<strong>setAPI</strong>',

//};

//sgMail.send(msg);