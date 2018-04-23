require('dotenv').config();
var http = require('http');
const sgMail = require('@sendgrid/mail');

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/plain'});
	response.end('Server Started\n');	
}).listen(8080);

/*
sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const msg = {

  to: 'lpsminimart@verizon.net',

  from: 'lpsminimart@sendgrid.com',

  subject: 'Testing 4.22.550',

  text: 'testing setApi',

  html: '<strong>setAPI</strong>',

};

sgMail.send(msg);
*/