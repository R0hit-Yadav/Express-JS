// How cookies work
// When a user visits a cookie-enabled website for the first time, the browser will prompt the user that the
// web page uses cookies and request the user to accept cookies to be saved on their computer. Typically,
// when a makes a user request, the server responds by sending back a cookie (among many other things).
// • This cookie is going to be stored in the user’s browser. When a user visits the website or sends another
// request, that request will be sent back together with the cookies. The cookie will have certain
// information about the user that the server can use to make decisions on any other subsequent requests.

//npm install cookie-parser

const express = require('express')
const cookieParser = require('cookie-parser')

var express = require('express');
var app = express();
var cp = require('cookie-parser');
app.use(cp());
app.get('/cookie', function(req, res)
{
    res.cookie('name', 'Express JS');
    res.cookie('fname', 'express'); //Sets fname = express
    res.cookie('lname', 'js'); //Sets lname = js
    res.cookie('ID','2',{ expires:new Date(Date.now()+10000)}); //expires after 10 secs
    res.cookie('email', 'express@gmail.com',{maxAge:2000}); //expires after 2 secs
    res.clearCookie('fname');
    //show the saved cookies
    const cookies = req.cookies;
    res.send(cookies); //Use req.cookies method to check the saved cookies
});
app.listen(3000);

//To check if your cookie is set or not, just go to your browser, fire up the console, and enter −
console.log(document.cookie);