require('dotenv').config();
var http = require('http');
var express = require('express');
var app = express();
const sgMail = require('@sendgrid/mail');

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
   //res.sendFile( "index.htm" );
})

app.get('/process_get_form', function (req, res) {
   // Prepare output in JSON format
   response = {
      first_name:req.query.first_name,
      last_name:req.query.last_name
   };

   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   const msg = {

  to: 'lpsminimart@verizon.net',

  from: 'lpsminimart@sendgrid.com',

  subject: req.query.first_name,

  text: 'testing setApi',

  html: '<strong>setAPI</strong>',

};

sgMail.send(msg);

   console.log(response);
   res.end(JSON.stringify(response));
})

var server = app.listen(8080, function () {
   var host = server.address().address
   var port = server.address().port
   
   console.log("Example app listening at http://%s:%s", host, port)
})

/*
http.createServer(function (request, response){
	response.writeHead(200, {'Content-Type': 'text/html'});
	//response.end('Server Started\n');
	response.write('<form action="emailFuelReadings" method="post" enctype="multipart/form-data">');
	response.write('<input type="text" name="gasReadingReg"><br>');
	response.write('<input type="submit">');
	response.write('</form>');
	return response.end();	
}).listen(8080);
*/

//sgMail.setApiKey(process.env.SENDGRID_API_KEY);

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