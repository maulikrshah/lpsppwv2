require('dotenv').config();
var http = require('http');
var express = require('express');
var app = express();
const sgMail = require('@sendgrid/mail');

app.use(express.static('public'));

app.get('/index.htm', function (req, res) {
   res.sendFile( __dirname + "/" + "index.htm" );
   res.sendFile( __dirname + "/" + "images/lps.png" );
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

   to: 'lpsminimart@verizon.net',

   from: 'lpsminimart@sendgrid.com',

   subject: req.query.tc_vol_reg,

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

