// Express is a fast,assertive,essential and moderate web framework of node.js

// why use express 
/*
Ultra fast I/O
Asynchronus and single threaded
mvc like structure
robust API makes routing esay
*/
var express = require("express")
var app=express()

app.get('/',function(req,res)
{
    res.send("Hello WOrld!")
});app.listen(5000)