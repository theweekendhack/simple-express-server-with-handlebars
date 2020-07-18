//import express 
const express = require("express");
const exphbs  = require('express-handlebars');


//create Express App object 
const app = express();


//This tells the app object that we will be using handlebars as
//our designated Template engin
app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

//routes
app.get("/",(req,res)=>{
    res.render("index",{
       title : "Home",
       data : "The is is dynamic data. YAY"  

    }); // load index.handlebars (template file)
});

app.get("/about-us",(req,res)=>{

    res.render("aboutUs",{
        title : "About Us" 
     })
});


app.get("/contact-us",(req,res)=>{
    
    res.render("contactUs",{
        title : "Contact Us Page",
        services : ["Phones", "Laptops", "PS5"],
        images
     }) 
});



//Create our Web Server 
const PORT = 3000;
app.listen(PORT, ()=>{
    console.log(`Web Server is up running `);
});


