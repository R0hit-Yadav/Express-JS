// GET and POST both are two common HTTP requests used for building REST API's
// GET requests are used to send only limited amount of data because data is sent into header while POST requests are
// used to send large amount of data because data is sent in the body.

//===========> Get method
//index.html
/* <html>
<body>
<form action="/process_get" method="get">
First Name: <input type="text" name="first_name"> <br>
Last Name: <input type="text" name="last_name">
<input type="submit" value="Submit">
</form>
</body>
</html> */

// example1.js
var express = require('express');
var app = express();
app.use(express.static(__dirname))
app.get('/process_get', function (req, res) 
{
response = 
{
 fname:req.query.first_name,
 lname:req.query.last_name
 };
 console.log(req.query); 
 res.send(response);
})
app.listen(8000)


// ==============>Post method
// It facilitates you to send large amount of data because data is sent in the body. Post method is secure because
// data is not visible in URL.

var express = require("express");
app.use(express.urlencoded());

// npm install body-parser
var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false })); //Default value is true, but using the default has been deprecated

//Example
// express/frontend/p.html
// <html>
// <body>
// <form action="/process" method="post">
// First Name: <input type="text" name="first_name"> <br>
// Last Name: <input type="text" name="last_name">
// <input type="submit" value="Submit">
// </form>
// </body>
// </html>

// express/backend/p.js
var express = require('express');
var app = express();
var path = require("path");
app.use(express.urlencoded({ extended: false }));
var staticp = path.join(__dirname, "../frontend");
app.use(express.static(staticp,{index: 'p.html'}));
app.post('/process', function (req, res) 
{
    console.log(req.body.first_name+"" +req.body.last_name)
    res.send(req.body);
})
app.listen(7002)