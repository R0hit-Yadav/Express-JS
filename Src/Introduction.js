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

/* Response Method
res.end()  -> End the response process
res.jeson()  -> send a JSON response
res.redirect()  -> Redirect a req
res.render()  -> render a view template
res.send() -> send a response of various types
res.sendFile()  -> send a file as an octent stream
*/

const expr =require("express")
const app = expr()
app.get("/",(req,res)=>
    {
    res.set("content-type","text/plain")
    res.send("<h1>Hello</h1>")
})
app.get("/about",(req,res)=>
{
    res.set("content-type","text/html")
    res.write("Hello")
    res.write("<h1> Hello from home</h1>")
    res.send()
});app.listen(4000)


/*===>Routing
Routing refres to determiing how an application responds to a 
client request to particular endpoint, which is a URL(or path)
and specific http request method (GET,POST, and so on ) */

app.METHOD(path,handler)

//respond with hello world on ht home page
app.get('/',(req,res)=>
{
    res.send("Hello World!")
})

//respond to post requst on the root route , the application's home page:
app.post('/',(req,res)=>
{
    res.send("Got a Post request")
})

// the app.all() function is used to route all types of https req


//routes parameters
var express = require("express")
var app = express()
app.get('/:id',function(req,res)
{
    res.send("The id you specified is "+req.params.id)
});app.listen(5000)
//https://localhost:5000/123 print 123 u can chnage in ural id

//for multiple para
var express= require("express")
var app = express()
app.get('/things/:name/:id',function(req,res)
{
    res.send('id: '+req.params.id + ' and name: '+req.params.name)
    res.send(req.params)// from this all para access
});app.listen(3000)

// app.use() -> function is used to amount the specified middleware
// function at the path which is being specified 
// syntax: app.use(path,callback)

//sending a json response
app.get('/',(req,res)=>res.send("Hello World!"))
res.json({username:"Dev"})

//send JSON object using res.write
const expr= require("express")
const app = expr()
student = {name:'xyz',age:31}
app.get("/",(req,res)=>
{
    res.set("content-type","text/html")
    res.write(JSON.stringify(student))
    res.send()

    res.send(student)//res.send auto converts data in strinf format

});app.listen(5000)


//EX- Write Express JS script to req server to display json object(array of object )
// in table form on browser
const expr=require("express")
const app=expr()
student={
    A1:[{name:"xyz",id:1},
        {name:"pqr",id:2},
        {name:"mnc",id:3},
        {name:"abc",id:4},
    ]
}
app.get("/student",(req,res)=>
{
    res.set("content-type","text/html")
    res.write("<center><table cellspacing='5px' cellpading='8px border='1px solid><tr><th>Name</th><th>ID</th></tr>'")
    for(i of student.A1)
        {
            res.write("<tr><td>"+i.name+"</td>")
            res.write("<td>"+JSON.stringify(i.id)+"</td></tr>")
        }
        res.write("<table></center>")
        res.send()
}).listen(5000)

//EX 
/*Write an express js script to define one JSON array of 3 object having proper-ties
name and age.short these objects according to age.if user request sort-ednames in url
then all names along with age should be printed according to 
desending order of age also display these sorted values on "Sort Page" and display
Json object on "Home Page"
*/
const exper= require("express")
const app = expr()
student=[{name:'abc',age:28},
    {name:"def",age:40},
    {name:"xyz",age:10}
]
app.get("/",(req,res)=>{
    res.set("content-type","text/html")
    res.send(student)
})
app.get("/sortenames",(req,res)=>{
    res.set("content-type","text/html")
    for(i=0;i<student.length;i++)
        {
            for(j=0;j<student.length;j++)
                {
                    if(student[i].age>student[j].age)
                        {
                            temp=student[i];
                            student[i]=student[j]
                            student[j]=temp
                        }
                }

        }
        for(k=0;k<student;k++)
            {
                res.write("<center><h2>"+student[k].name+""+student[k].age+"</h2></center>")

            }
            res.send()       
});app.listen(5200)

//==>Serving Staic Files(HTML,CSS,JS,IMAGE FILES)

//EX
/*Create one.html file and app.js */
const expr=require("express")
const path=require("path")
const app=expr()
const staticPath=path.join(__dirname)
console.log(staticPath)
app.use(expr.static(staticPath))
app.get("/",(req,res)=>
{
    res.sendFile("/One.html")
})
app.listen(5000)


