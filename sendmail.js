require('dotenv').config();
var http = require('http');
const sgMail = require('@sendgrid/mail');

http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	//response.end('Server Started\n');
	response.write('<form action="emailFuelReadings" method="post" enctype="multipart/form-data">');
	response.write('<input type="text" name="gasReadingReg"><br>');
	response.write('<input type="submit">');
	response.write('</form>');
	return response.end();	
}).listen(8080);

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

/*
const msg = {

  to: 'lpsminimart@verizon.net',

  from: 'lpsminimart@sendgrid.com',

  subject: 'Testing 4.22.950',

  text: 'testing setApi',

  html: '<strong>setAPI</strong>',

};

sgMail.send(msg);
*/