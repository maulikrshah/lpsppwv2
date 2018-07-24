require('dotenv').config();
var http = require('http');
var express = require('express');
var app = express();
const sgMail = require('@sendgrid/mail');
//var mongodb = require('mongodb');

app.use(express.static('images'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
   //res.sendFile( __dirname + "/" + "images/lps.png" );
})

app.get('/process_get_veeder', function (req, res) {
   // Prepare output in JSON format
   response = {
      regular_vol:req.query.tc_vol_reg,
      super_vol:req.query.tc_vol_sup,
      diesel_vol:req.query.tc_vol_die
   };

   sgMail.setApiKey(process.env.SENDGRID_API_KEY);

   const msg = {
	to: 'Meghna <baku2915@gmail.com>',
	from: 'LPS Mini Mart <lpsminimart@sendgrid.com>',
	subject: 'Daily Gas Readings',
	text: 'Regular: ' + req.query.tc_vol_reg,
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

