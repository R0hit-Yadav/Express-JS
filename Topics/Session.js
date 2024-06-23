//Session
// HTTP is stateless; in order to associate a request to any other request, you need a way to store user data
// between HTTP requests. Cookies and URL parameters are both suitable ways to transport data between the
// client and the server. But they are both readable and on the client side. Sessions solve exactly this problem. You
// assign the client an ID and it makes all further requests using that ID. Information associated with the client is
// stored on the server linked to this ID. Install the using the command:

// npm install express-session

const oneDay = 1000 * 60 * 60 * 24; // creating 24 hours from milliseconds
app.use(sessions({
 secret: "thisismysecretkey",
 saveUninitialized:true,
 cookie: { maxAge: oneDay },
 resave: false
}));


const express=require("express");
const app=express();
const sess=require("express-session");
app.use(sess(
{
    resave:true,
    saveUninitialized:true,
    secret:"LJU123"
}
));
app.get("/",(req,res)=>
{
    if(req.session.page_views)
    {
        req.session.page_views++;
        res.send(`<h1 style="color:blue;"> You have visited page ${req.session.page_views} times <h1>`);
    }
    else
    {
        req.session.page_views=1;
        res.send(`<h1 style="color:green;"> Welcome! Thank you for visiting our website!<h1>`);
    }
});
app.listen(8003)