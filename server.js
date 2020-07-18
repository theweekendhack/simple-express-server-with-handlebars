//import express 
const express = require("express");


//create Express App object 
const app = express();

//IN order to communicate with a web server created by EXPRESS
//YOU MUST CREATE ROUTES ()

//TYPES HTTP REQUEST 
//1. GET
// 2. POST
// 3. PUT 
// 4. DELETE 

//home 


//WET AS F! (CODE DRIVING A TIDA)


const htmlTemplate= (data)=>{

    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data.title}</title>
    </head>
    <body>
    <header>
        <nav>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about-us">About</a></li>
                <li><a href="/contact-us">Contact</a></li>
            </ul>
        </nav>
    </header>
    <section>
        <h1>${data.headingInfo}</h1>
    </section>
    <main>
        ${data.htmlContent}
    </main>
    </body>
    </html>`;
}


//Routes
app.get("/",(req,res)=>{
  
    
    const obj = {

        title: 'Home Page',
        headingInfo: "This is the home page",
        htmlContent:`<p>This is the HOme blah blah blah blah</p>`
    }

    res.send(htmlTemplate(obj));

})

//about
app.get("/about-us",(req,res)=>{


    const obj = {

        title: 'About Us Page',
        headingInfo: "This is the About Us page",
        htmlContent:`<p>This is the About Page.</p>`
    }

    res.send(htmlTemplate(obj));
})


//contact-us
app.get("/contact-us",(req,res)=>{

    const obj = {

        title: 'Home Page',
        headingInfo: "This is the home page",
        htmlContent:`<form action="/contact-us"  method="POST">

            <label for="">First Name </label> 
            <input type="text"> <br><br>

            <label for="">Last Name </label> 
            <input type="text"> <br><br>

            <label for="">Email Name </label> 
            <input type="email"> <br><br>


            <label for="">Messsage </label> 
           <textarea rows="5" cols="10"></textarea>

           <input type="submit" value="Register">

        </form>`
    }

    res.send(htmlTemplate(obj));



 
   
});

app.post("/contact-us",(req,res)=>{
    console.log(`Form was submitted`);

    res.redirect("/");

});



//Create our Web Server 
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Web Server is up running `);
});


