require('dotenv').config();

const sgMail = require('@sendgrid/mail');

sgMail.setApiKey(process.env.SENDGRID_API_KEY);



//console.log('Sendgrid API:', process.env.SENDGRID_API_KEY);

const msg = {

  to: 'lpsminimart@verizon.net',

  from: 'lpsminimart@sendgrid.com',

  subject: 'Testing 3.31.400',

  text: 'testing setApi',

  html: '<strong>setAPI</strong>',

};

sgMail.send(msg);