// Express Middleware
// Express.js is a routing and Middleware framework for handling the different


// example to understand concept of middleware

var express = require("express");
var app = express();

//Method 1
const cb=(req,res,next)=>
{
    console.log("Initialized");
    res.set("content-type","text/html")
    res.write("<strong>First</strong>");
    next();
}
const cb1=(req,res,next)=>
{
    res.write("<p>Addition = " + (5+5) + "</p>");
    next();
}
app.use("/ee",cb,cb1);
app.get("/ee",(req,res)=>
{
    res.write("<h1>Hello Welcome to LJU</h1>");
    res.send();
});


//Method 2
app.use(
"/xyz",
(req, res, next) => 
    {
    console.log("request received on"+new Date());
    next();
},
(req, res, next) => 
    {
    res.set("content-type","text/html")
    res.write("Hello");
next();
},
(req, res) => 
    {
    res.write(`<div>
    <h2>Welcome to LJU</h2>
    <h5>Tutorial on Middleware</h5>
    </div>`);
    res.send();
}
);
app.listen(6001)


// Output:
// ==>localhost:6001/ee
// On browser
// First
// Addition = 10
// Hello Welcome to LJU
// In console
// Initialized

// ==>localhost:6001/xyz
// On browser
// Hello
// Welcome to LJU
// Tutorial on Middleware
// In console
// request received onMon Jun 10 2024 15:22:44 GMT-0700 (Pacific Daylight Time)