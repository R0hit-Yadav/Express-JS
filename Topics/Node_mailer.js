//Nodemailer is a module for Node.js applications to allow easy email sending. 

//npm install nodemailer 
//let transporter = nodemailer.createTransport(options[, defaults])

//Simple example to send mail using nodemailer.
// mailer.js

var nm = require("nodemailer"); 
var trans = nm.createTransport({ 
    host : "smtp.gmail.com",
    port:465, 
    auth:
    { 
        user : "sender@gmail.com", 
        pass : "App Password" 
    }      
}); 
var mailoption = 
{ 
    from:"sender@gmail.com", 
    to:"receiver1@gmail.com,receiver2@gmail.com ", 
    subject : "Hello", 
    text : 'Test mail', 
    html:'Testing node mailer, <h1>Effect of h1</h1>' 
}; 
trans.sendMail(mailoption,(err,info)=>
{ 
    if(err)
    { 
        console.error(err); 
    } 
    console.log(info); 
}); 