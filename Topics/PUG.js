//PUG 
// PUG, was previously known as JADE. It is an easy-to-code template engine used to code HTML in a more 
// readable fashion. 

//npm install pug

//Pug file example.
// html   
//   head   
//     title My Page   
//   body   
//     h1 Heading   
//     p My paragraph here

//Unbuffered Code vs. Buffered Code

//Unbuffered Code starts with a hyphen - and does not directly output anything. It can be used in  the PUG code later to make changes.
-var number = 4 

//Buffered Code starts with =. If there is an expression, it will evaluate it and output the result.
h4= "3 times number is: " + number*3 

//Example

/frontend/one1.pug 
html 
head 
 title PUG Tutorial  
body
    //1 
    h1 LJU 

    //2 
    h1(style="color:red;font-size:35px;") lets learn pug  

    //3 
    p(style="font-size:25px;") 
     i italic para   
      b(style="color:blue") bold italic blue para  
     b bold para  

    //4 
    p 
     |The file will not 
     |render properly if the 
     |programmer does not make 
     |sure of proper indentation 
    
    //5 
    ul 
        li Mango 
        li Watermelon 
        li Pineapple 

    // 6  
    ol(type="A")
     li Janyary  
     li February  
     li March

    // 7 Attributes spanning over multiple lines 
    a( 
        href='/about' 
        target="_blank" 
        style="color:purple;font-size:20px" 
    ) About 

    // 8 Multiple attributes separated by a comma 
    table(border='1px solid',style='border-collapse:collapse;color:red') 
    tr 
        th name 
        th id  
    tr 
        td abc  
        td 1    
    tr 
        td xyz  
        td 2 


// Unbuffered Code 
    -var number = 2 
    -var color = 'Black' 
    -var list = ["India", "USA", "UK"] 


// 9 Buffered Code 
    h4= "3 times number is: " + number*3 
    h3= "I Like " + color + " color" 
    h3= "Country: " + list[2] 
    
// This is a Buffered Comment 
//-This is an Unbuffered Comment. It does not appear in the rendered HTML file. 
// This is a multiline comment 