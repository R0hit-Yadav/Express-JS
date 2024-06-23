// Routing refers to determining how an application responds to a client request to a particular endpoint, which is a URI (or path) and a specific HTTP request method (GET, POST, and so on).

app.get('/', (req, res) => 
    {
    res.send('Hello World!')
   })

app.post('/', (req, res) => 
    {
res.send('Got a POST request')
})

// ==============>Route parameters
// Route path: /calendar/:day/event/:ename
// Request URL: http://localhost:6001/calendar/monday/event/birthday
// req.params: {"day":"monday","ename":"birthday"}

var expr = require("express");
var app = expr();
app.get('/calendar/:day/event/:ename', (req, res) => 
    {
 res.send(req.params);
 });
app.listen (6001) 
// Output:
// {"day":"monday","ename":"birthday"}


// =============>JSON Processing
// We can define a JSON object and directly pass it inside res.send(). For this, JSON.stringify() method is not
// required. To send JSON object in res.write(), convert JSON object to string using JSON.stringify().

// Send JSON object using res.write
const expr=require("express")
const app=expr();
student={name:"LJU",age:28}
app.get("/",(req,res)=>
    {
    res.write(JSON.stringify(student))
    res.send()
})
app.listen(6007)

// Send JSON object using res.send
const expr=require("express")
const app=expr();
student={name:"LJU",age:28}
app.get("/",(req,res)=>
    {
res.send(student)
})
app.listen(6007)

// =================>Link HTML, CSS and JS files

// app.use() app.use(path, callback)
// function is used to mount the specified middleware function(s) at the path which is being specified. It is mostly
// used to set up middleware for your application.

// path.join() The path.join() method joins the specified path segments into one path
// __dirname  is an environment variable that tells you the absolute path of the directory containing the
// currently executing file.

//examples
app.use(express.static(__dirname))
app.use(express.static(frontend))

const express = require ("express")
const app = express();
const path = require ("path");
const staticpath = path.join (__dirname,"../frontend");
// name of file must be index.html
app.use(express.static(staticpath))
