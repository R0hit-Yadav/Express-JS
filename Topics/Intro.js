/*
->Express.js is a small framework that works on top of Node.js web server functionality to simplify its APIs and add helpful
new features.
->It makes it easier to organize your application’s functionality with middleware and routing.
->It adds helpful utilities to Node.js HTTP objects and facilitates the rendering of dynamic HTTP objects.
*/

/*npm install express */

var express = require('express');
var app = express();
app.get('/', function(req, res)
{
    res.set ("content-type","text/plain");
    res.send("Hello world!");

});app.listen(3000);


// app.get(route, callback) 
// This function tells what to do when a get request at the given route is called. The callback function has 2 parameters, request(req) and response(res). 

// res.send()
// This function takes an object as input and it sends this to the requesting client. Here we are sending the string "Hello
// World!".

// -> res.end: comes from NodeJS core. In Express JS if you need to end request in a quick way and do not need
// to send any data then you can use this function.
// -> res.send: Sends data and end the request.
// -> res.json: Sends data in JSON format and ends the request.
// -> res.json() allows for extra formatting of the JSON data - if this is not required res.send() can also be used to
// return a response object using Express. Both of these methods also end the response correctly, and there's
// no further action required.