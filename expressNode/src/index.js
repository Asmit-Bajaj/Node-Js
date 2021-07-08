//express initiliazation
const express = require("express");
const app = express();
const path = require("path");
const hbs = require("hbs");

const staticPath = path.join(__dirname,"../public");
const templatePath = path.join(__dirname,"../templates/views");
const partialsPath = path.join(__dirname,"../templates/partials");

//register partial folder
hbs.registerPartials(partialsPath);

//now using hbs handle bars.js
app.set('view engine','hbs');

//changing views lookup directory
app.set('views',templatePath);

//middleware
// app.use(express.static(staticPath));

//render hbs files
app.get("/",(req,resp)=>{
    // replace variable name with value
    resp.status(200).render('index',{
        name : "asmit",
    });
});

app.get("/about",(req,resp)=>{
    resp.status(200).render('about');
});

//for invalid url
app.get("*",(req,resp)=>{
    resp.status(404).render('404errorPage',{
       errorComment : "This Page Doesn't Exist", 
    });
});

app.listen(5000,()=>{
    console.log("listening at port 5000");
})