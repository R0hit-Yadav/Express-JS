//QB-211
// Write an express.js script to define one JSON array of 3 objects having members name and age. 
// Names must be sorted according to age. If user requests “sorted Names” URL, then all names should be printed according to ascending order of age.
const expr = require("express") 
const app = expr(); 
student = [
    {name:"abc",age:28}, 
    {name:"def",age:40}, 
    {name:"xyz",age:50}] 

    //home page         
    app.get ("/",(req,res)=>
    { 
        res.set ("content-type","text/html") 
        res.send (student) 
    }) 
    //sort page 
    app.get ("/sort",(req,res)=>
    { 
        res.set ("content-type","text/html")
        var des = student.sort((a,b)=>b.age-a.age) 
        console.log(des) 
        for (k=0;k<des.length;k++)
        { 
            res.write ("<center><h2>"+des[k].name+ " = " +des[k].age +"</h2></center>") 
        } 
        res.send () 
    }) 
    app.listen (5200)  
        
//QB-212 
// Process a form using post method. Form has fields like username, password, confirm password, gender, submit and reset buttons. 
// After entering all fields, If password and confirm password matches, then form should be processed and all relevant and selected fields’ 
// values should be printed. Otherwise, by printing warning message in red color, it should terminate. No need to write file having form elements.
const express = require('express');//approch diffrent method
const bodyParser = require('body-parser');
// const app = express();

const port = 3000;

// Middleware to parse URL-encoded data
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => 
    {
    // Form HTML
    res.send(`
        <form action="/submit" method="POST">
            <label for="username">Username:</label>
            <input type="text" id="username" name="username" required><br><br>
            <label for="password">Password:</label>
            <input type="password" id="password" name="password" required><br><br>
            <label for="confirmPassword">Confirm Password:</label>
            <input type="password" id="confirmPassword" name="confirmPassword" required><br><br>
            <label for="gender">Gender:</label>
            <select id="gender" name="gender" required>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
            </select><br><br>
            <button type="submit">Submit</button>
            <button type="reset">Reset</button>
        </form>
    `);
});

app.post('/submit', (req, res) => 
    {
    const { username, password, confirmPassword, gender } = req.body;

    if (password !== confirmPassword) 
        {
        res.send(`
            <p style="color: red;">Passwords do not match!</p>
            <a href="/">Go back</a>
        `);
    } else {
        res.send(`
            <h2>Form submitted successfully!</h2>
            <p>Username: ${username}</p>
            <p>Gender: ${gender}</p>
        `);
    }
});app.listen(3000)

//QB-213
// write an express.js script to load an HTML file having username and password and submit button. On clicking submit button. 
// It should jump on "check" page using "POST" method. If username is "admin" , then jump on next middleware to print "welcome… admin" , 
// if username is not "admin" , then stay on same middleware to print "warning msg" in red color.

 
//App.js 
const express=require("express");  
// const app=express(); 
app.use(express.urlencoded({extended:false})); 
app.use(express.static(__dirname));  
app.post("/check",(req,res,next)=>
{  
    if(req.body.uname=="admin") 
    {  
        next();  
    } 
    else 
    {  
        res.send("<h1 style='color:red'>wrong credentials</h1>") 
    } 
}); 
app.post("/check",(req,res)=> 
{ 
    res.write("<h1>welcome..."+ req.body.uname+ "</h1>") 
    res.send(); 
} 
).listen(3001); 


//Index.html
<html> 
<body> 
<form action ="/check" method="post"> 
Username: <input type="text" name="uname"/> 
password: <input type="text" name="pwd"/> 
<input type="submit"/> 
</form> 
</body> 
</html>


//QB-214
// write a sript to meet foll requirements. 
// 1) create index.html page and open it on localhost 2) after clicking submit button, it should jump to savesessionpage.store username in session.
// 3) After saving session, redirect to fetchsession page and read session value. put a logout link button here.
// 4) destroy the session on this page and redirect to index.html

//session.js 
var express = require("express"); 
// var app = express(); 
var es = require("express-session"); 
app.use(es({ 
    resave:false, 
    saveUninitialized:false, 
    secret:"lju1" 
    })); 
    app.use(express.static(__dirname)); 
app.get("/savesession",(req,res)=>
{ 
    req.session.uname = req.query.uname; 
    req.session.password = req.query.password; 
    res.redirect("fetchsession")     
}) 
app.get("/fetchsession",(req,res)=>
{ 
    res.write("<h1>Welcome " + req.session.uname +"</h1>") 
    res.write("<a href='/deletesession'>Logout</a>") 
    res.send(); 
}); 
app.get("/deletesession",(req,res)=>
{ 
    req.session.destroy() 
    res.redirect('/') 
}); app.listen(6177); 

//QB-215
// write an express.js script to print "hello World" also run on localhost:4000 
const express = require('express');
// const app = express();
app.get('/', (req, res) => {
    res.send('Hello World');
});app.listen(4000)



//QB-216
//write an express.js script to use of routing method using home , about , contact , temp page and print message. 
// /home- welcome to my home page , /about -welcome to my about page, /contact-welcome to my contact page ,
// /temp - welcome to my temp page
const express = require('express');
// const app = express();
app.get('/home', (req, res) => {
    res.send('Welcome to my home page');
});

app.get('/about', (req, res) => {
    res.send('Welcome to my about page');
});

app.get('/contact', (req, res) => {
    res.send('Welcome to my contact page');
});

app.get('/temp', (req, res) => {
    res.send('Welcome to my temp page');
});app.listen(4000)



//QB-217
// write an express.js script to make one index.html file in this file we write simple heading tag and make one css file 
// index.css put style using appropriate selector and link with js file and show output on localhost:3030.
// your-app/
// |-- app.js
// |-- public/
// |   |-- index.html
// |   |-- index.css

//index.html
/* <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Index Page</title>
    <link rel="stylesheet" href="index.css">
</head>
<body>
    <h1 class="heading">Hello, World!</h1>
</body>
</html> */

//index.css
// .heading {
//     color: blue;
//     text-align: center;
//     margin-top: 50px;
// }

//app.js
const express = require('express');
const path = require('path');
// const app = express();

// Middleware to serve static files
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => 
    {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});app.listen(4000)




//QB-218
// write an express.js to implement a form that allows users to submit data via POST request. 
// Write code to create a route that handles the POST request and logs the submitted data to the console.

//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Form Submission</title>
// </head>
// <body>
//     <h1>Submit Your Data</h1>
//     <form action="/submit" method="POST">
//         <label for="name">Name:</label>
//         <input type="text" id="name" name="name" required><br><br>
//         <label for="email">Email:</label>
//         <input type="email" id="email" name="email" required><br><br>
//         <button type="submit">Submit</button>
//     </form>
// </body>
// </html>

//app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
// const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));


app.post('/submit', (req, res) => 
    {
    const formData = req.body;
    console.log('Form Data:', formData);
    res.send('Form submitted successfully!');
});app.listen(4000)


//QB-219 how can you create and use a middleware function in express js?
const express = require('express');
// const app = express();


// Create a middleware function
function logRequest(req, res, next) 
{
    console.log(`${req.method} ${req.url}`);
    next(); 
}

app.use(logRequest);
app.get('/', (req, res) => 
{
    res.send('Welcome to the Home Page');
});

app.get('/about', (req, res) => 
{
    res.send('Welcome to the About Page');
});

app.post('/submit', (req, res) => 
{
    res.send('Form submitted successfully!');
});app.listen(3000)

// Apply middleware to specific routes
app.get('/about', logRequest, (req, res) => 
{
    res.send('Welcome to the About Page');
});

app.post('/submit', logRequest, (req, res) => 
{
    res.send('Form submitted successfully!');
});



//QB-220
//write an express js to link html , css and js file and show one image o.jpg. And also show the description of image.
const express = require('express');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => 
    {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});app.listen(3000);
//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Image Display</title>
//     <link rel="stylesheet" href="style.css">
//     <script src="script.js" defer></script>
// </head>
// <body>
//     <h1 class="title">Image Display Page</h1>
//     <div class="image-container">
//         <img src="images/o.jpg" alt="Image" class="image">
//         <p class="description">This is the description of the image.</p>
//     </div>
// </body>
// </html>



//QB-221
// using Express js make student information form only two fileds like name and mobile no and send data on console after submitting "submit" button
//app.js
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) =>
{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});
app.post('/submit', (req, res) => 
    {
    const { name, mobile } = req.body;
    console.log('Submitted Data:');
    console.log('Name:', name);
    console.log('Mobile:', mobile);
    res.send('Form submitted successfully!');
});app.listen(4000)

//index.html
/* <form action="/submit" method="POST">
        <label for="name">Name:</label>
        <input type="text" id="name" name="name" required><br><br>
        <label for="mobile">Mobile Number:</label>
        <input type="tel" id="mobile" name="mobile" required><br><br>
    <button type="submit">Submit</button>
</form> */




//QB-222
//Write an ExpressJS to take a textarea & submit button. After clicking submit button the content 
// of textarea should be represented on next page by writing each sentence (separated by dot) in new line.
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) =>
 {
    const { text } = req.body;
    const sentences = text.split('.'); // Split text into sentences based on dot (.)
    res.render('result', { sentences });
});
app.set('view engine', 'ejs'); 
app.set('views', path.join(__dirname, 'views'));
app.listen(3000)


// //QB-223
// Write a script to meet following requirement using ExpressJS. 
// 1. Create index.html which contains login page having fields like Username, Password & Gender. Open it on localhost. 
// 2. After clicking on submit button, it should jump to savesession page. store username & gender in session.
// 3. After saving session, redirect to fetchsession page and read session values. Put a logout link button here.
// 4. After clicking logout button, it jumps to deletesession page. 
// 5. Destroy the session on this page & redirect to index.html page.

//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Login Page</title>
//     <link rel="stylesheet" href="style.css">
// </head>
// <body>
//     <div class="container">
//         <h1>Login Page</h1>
//         <form action="/savesession" method="POST">
//             <label for="username">Username:</label>
//             <input type="text" id="username" name="username" required><br><br>
//             <label for="password">Password:</label>
//             <input type="password" id="password" name="password" required><br><br>
//             <label for="gender">Gender:</label>
//             <select id="gender" name="gender" required>
//                 <option value="male">Male</option>
//                 <option value="female">Female</option>
//             </select><br><br>
//             <button type="submit">Submit</button>
//         </form>
//     </div>
// </body>
// </html>

//app.js
const express = require('express');
const session = require('express-session');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
    {
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => 
    {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/savesession', (req, res) => 
{
    const { username, gender } = req.body;
    req.session.username = username;
    req.session.gender = gender;
    res.redirect('/fetchsession');
});

app.get('/fetchsession', (req, res) => 
{
    const username = req.session.username;
    const gender = req.session.gender;
    res.render('fetchsession', { username, gender });
});

app.get('/deletesession', (req, res) => 
{
    req.session.destroy(err => 
        {
        if (err) 
            {
            console.error('Error destroying session:', err);
            res.status(500).send('Error destroying session');
        } 
        else 
        {
            res.redirect('/');
        }
    });
});app.listen(5000)

//QB-224
// You have been assigned to develop a user feedback form for a website using Express.js and cookies. 
// Implement the following requirements:  Process a form with the following fields: Name, Email , Message , 
// Rating (radio buttons: Bad, Average, Good, Very Good, Excellent) When the user submits the form, store their feedback 
// information (name, email, message, and rating) in a cookie named "feedback" that expires in 10 seconds. Display 
// a confirmation message to the user after successfully submitting the form & Create a link to display the feedback details 
// stored in the "feedback" cookie. When the user click to the link, retrieve the feedback information from the cookie and 
// display it on the page also include a link on the feedback details page to Logout. When the user clicks the link, user
//  redirected to home page. Make app.js file use get method in express js. No need to write html file having form elements.
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());


app.get('/submit', (req, res) => 
{
    const { name, email, message, rating } = req.query;
    res.cookie('feedback', JSON.stringify({ name, email, message, rating }), { maxAge: 10000 }); // Expires in 10 seconds
    res.send('<h2>Thank you for your feedback!</h2><p><a href="/feedback">Click here</a> to view your feedback details.</p>');
});
app.get('/feedback', (req, res) => 
{
    const feedback = req.cookies.feedback ? JSON.parse(req.cookies.feedback) : null;
    
    if (feedback) {

        // Display feedback details
        res.send(`
            <h2>Your Feedback Details:</h2>
            <p><strong>Name:</strong> ${feedback.name}</p>
            <p><strong>Email:</strong> ${feedback.email}</p>
            <p><strong>Message:</strong> ${feedback.message}</p>
            <p><strong>Rating:</strong> ${feedback.rating}</p>
            <p><a href="/logout">Logout</a></p>`);
    } 
    else 
    {
        res.send('<p>No feedback submitted yet.</p>');
    }
});
app.get('/logout', (req, res) => 
    {
    res.clearCookie('feedback');
    res.redirect('/');
});app.listen(3000)



//QB-225
// write express script to maintain session and  print how many times user visit the page. For ex., if user visit first time 
// ,”you have visited page First time” message will print. if user visit second time ,”you have visited page second time” message will print. 
// and so on
const express = require('express');
const session = require('express-session');
const path = require('path');

app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
}));

app.get('/', (req, res) => 
{
    let visitCount = req.session.visitCount || 0;
    visitCount++;
    req.session.visitCount = visitCount;

    let visitText = '';
    switch (visitCount)
    {
        case 1:
            visitText = 'First';
            break;
        case 2:
            visitText = 'Second';
            break;
        case 3:
            visitText = 'Third';
            break;
        default:
            visitText = `${visitCount}th`;
            break;
    }
    res.send(`<h1>You have visited the page ${visitText} time.</h1>`);
});app.listen(3000)


//QB-226
// Write an express.js script to define one JSON array of 3 objects having members name and age.
//  If user requests “maxName” URL, then only the details of oldest person should be displayed.
const express = require('express');

const people = [
    { name: 'Alice', age: 30 },
    { name: 'Bob', age: 25 },
    { name: 'Charlie', age: 35 }
];
app.get('/maxName', (req, res) => 
{
    let oldestPerson = findOldestPerson(people);
    res.json(oldestPerson);
});
function findOldestPerson(arr) 
{
    if (arr.length === 0) return null;

    let oldest = arr[0];
    for (let i = 1; i < arr.length; i++) 
    {
        if (arr[i].age > oldest.age) 
        {
            oldest = arr[i];
        }
    }
    return oldest;
}
app.get('/', (req, res) => 
{
    res.json(people);
});
app.listen(4000)


//QB-227
// Write an express.js script to define 2 pages. 1st page has username and password. Store this username to cookie on 2nd page. Cookie must stay live for 1 day.
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());

app.get('/', (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.post('/submit', (req, res) => 
{
    const { username } = req.body;

    res.cookie('username', username, 
    {
        maxAge: 24 * 60 * 60 * 1000, // 1 day in milliseconds
        httpOnly: true // cookie is only accessible via HTTP(S)
    });
    res.redirect('/welcome');
});
app.get('/welcome', (req, res) => 
{
    const username = req.cookies.username;
    if (username) 
    {
        res.send(`<h1>Welcome, ${username}!</h1>`);
    } 
    else {
        res.redirect('/');
    }
});
app.listen(4000)


// //QB-228
// Write an expressJS code which loads login.html file upon browsing localhost:3010. 
// The Login.html file contains input for username,password and two checkboxes named remember and subscribe,on 
// submitting the file it should go to /data page where username,password and selected checkboxes are pinted,in 
// addition to that a logout button should be there,onclicking this button it should go back to home page 
// “localhost:3010/”.(GET/POST any method can be used)[Write all necessary files code]

//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>Login Page</title>
//     <link rel="stylesheet" href="/style.css">
// </head>
// <body>
//     <div class="container">
//         <h1>Login Page</h1>
//         <form action="/login" method="POST">
//             <label for="username">Username:</label>
//             <input type="text" id="username" name="username" required><br><br>
            
//             <label for="password">Password:</label>
//             <input type="password" id="password" name="password" required><br><br>
            
//             <input type="checkbox" id="remember" name="remember">
//             <label for="remember">Remember Me</label><br><br>
            
//             <input type="checkbox" id="subscribe" name="subscribe">
//             <label for="subscribe">Subscribe to Newsletter</label><br><br>
            
//             <button type="submit">Login</button>
//         </form>
//     </div>
// </body>
// </html>
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');

app.use(express.static(path.join(__dirname, 'public')));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

app.get('/', (req, res) => 
{
    res.sendFile(path.join(__dirname, 'public', 'login.html'));
});
app.post('/login', (req, res) => 
{
    const { username, password, remember, subscribe } = req.body;

    if (remember === 'on') 
    {
        res.cookie('remember', 'true', { maxAge: 24 * 60 * 60 * 1000 }); // 1 day in milliseconds
    } 
    else 
    {
        res.clearCookie('remember');
    }

    if (subscribe === 'on') 
    {
        res.cookie('subscribe', 'true');
    } 
    else 
    {
        res.clearCookie('subscribe');
    }
    res.redirect('/data');
});
app.get('/data', (req, res) => 
    {
    const username = req.cookies.remember ? req.cookies.username : 'Guest';
    const rememberMsg = req.cookies.remember ? 'Yes' : 'No';
    const subscribeMsg = req.cookies.subscribe ? 'Yes' : 'No';

    res.send(`
        <h1>Welcome, ${username}!</h1>
        <p><strong>Remember Me:</strong> ${rememberMsg}</p>
        <p><strong>Subscribe to Newsletter:</strong> ${subscribeMsg}</p>
        <form action="/logout" method="POST">
            <button type="submit">Logout</button>
        </form>
    `);
});
app.post('/logout', (req, res) => 
{
    res.clearCookie('username');
    res.clearCookie('remember');
    res.clearCookie('subscribe');
    res.redirect('/');
});
app.listen(4000)



//QB-229
// Write an express.js script to define one JSON array of 3 objects having members
// ‘name’ and ‘height’. height must be sorted descending order according to name.
const express = require('express');

const people1 = 
[
    { name: 'Alice', height: 165 },
    { name: 'Bob', height: 180 },
    { name: 'Charlie', height: 175 }
];

people1.sort((a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
});
app.get('/sortedData', (req, res) => 
{
    res.json(people1);
});
app.listen(5000)


//QB-230
// Write an express.js script to define one JSON array of 3 objects having members ‘name’ and ‘score’. score must be sorted descending order according to name.
const express = require('express');
const students = [
    { name: 'Alice', score: 85 },
    { name: 'Bob', score: 92 },
    { name: 'Charlie', score: 78 }
];

students.sort((a, b) => {
    if (a.name > b.name) return -1;
    if (a.name < b.name) return 1;
    return 0;
});

app.get('/sortedData', (req, res) => 
{
    res.json(students);
});
app.listen(5000)



//QB-231
// Write an express js script to link html , css and js file to show message “LJ University with a difference” with font size 50px and color “blue”. 

//index.html
// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <title>LJ University</title>
//     <link rel="stylesheet" href="/style.css">
//     <script src="/script.js" defer></script>
// </head>
// <body>
//     <div class="container">
//         <h1 id="message">LJ University with a difference</h1>
//     </div>
// </body>
// </html>
//style.css
// body {
//     font-family: Arial, sans-serif;
//     background-color: #f0f0f0;
//     text-align: center;
// }

// .container {
//     margin-top: 100px;
// }

// #message {
//     font-size: 50px;
//     color: blue;
// }]

//app.js
const express = require('express');
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));
app.listen(5200)


//QB-232
// Write express js script to perform tasks as asked below. 
// 1. Create one HTML file which contains two number type input fields, one dropdown which contains options to select like 
// (addition, subtraction, multiplication, division) and one submit button. 
// 2. The input fields must contain the value greater than 0 else it will give a message “Please enter the valid number”.
// Also, user must select any type of formula from the dropdown else give a message “You have not selected any formula”. 
// (Message will be displayed on “/calc” page.)
// 3. If one formula is selected and numbers are entered then Both numbers should be stored in cookies which expires in 50 seconds.
//  Respective calculations will be performed on the page “/calc”.



//QB-233


//QB-234


//QB-235


//QB-236


//QB-237


//QB-238


//QB-239


//QB-240


//QB-241