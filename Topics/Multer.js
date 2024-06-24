//Multer==>
    //Multer is a node.js middleware for handling multipart/form-data, which is primarily used for uploading files. 
    // Multer adds a file or files object to the request object. The file or files object contains the data of files uploaded via the form. 

//npm install multer 

//Storage(DiskStorage) 

// destination==> is used to determine within which folder the uploaded files should be stored. This 
// can also be given as a string (e.g. '/tmp/uploads'). If no destination is given, the operating system’s default directory for temporary files is used. 

// filename==> is used to determine what the file should be named inside the folder. If no filename is 
// given, each file will be given a random name that doesn’t include any file extension.

var storage = multer.diskStorage({ 
    destination:"single", 
    filename: function (req, file, cb) 
    { 
        cb(null, file.originalname) 
    } 
}) 

//.single(fieldname) -> Accept a single file with the name fieldname. The single file will be stored in req.file.

//.array(fieldname[, maxCount]) Accept an array of files, all with the name fieldname. Optionally error out if more than maxCount files are uploaded. The array of files will be stored in req.files. 

//Exmple
//Write  an express js script that accepts single file to be uploaded using the multer middleware and saves the file to the specific directory called “single”. 

//m1.js
// require the installed packages  
const express = require('express') 
const multer = require('multer'); 

//CREATE EXPRESS APP  
const app = express(); 
app.use(express.static(__dirname,{index: 'm1.html'})); 

// SET STORAGE 
var store = multer.diskStorage({ 
destination:"single", 
filename: function (req, file, cb) 
{ 
    cb(null, file.originalname) 
} 
}) 
var upload = multer({ storage: store }) 
app.post('/uploadfile', upload.single('mypic'), (req, res) => 
    { 
        const file = req.file 
        if (file) 
        { 
            res.send("<h1>File <span style='color:red'>'"+ file.originalname + "'</span> has been uploaded in <span style='color:red'>" + file.destination + " </span>folder")   
        } 
    }) 
app.listen(6788);

//m1.html 

<html> 
<form action="/uploadfile" method="post" enctype="multipart/form-data"> 
<input type="file" name="mypic" accept=".jpg,.jpeg,.png"/> 
<input type="submit" value="Upload"/> 
</form> 
</html> 