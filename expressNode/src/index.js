//express initiliazation
const express = require("express");
const app = express();
const path = require("path");

const staticPath = path.join(__dirname,"../public");
const staticPath2 = path.join(__dirname,"../views");
app.set('views',staticPath2);

//now using hbs handle bars.js

app.set('view engine','hbs');

//middleware
// app.use(express.static(staticPath));

//render hbs files
app.get("/",(req,resp)=>{
    // replace variable name with value
    resp.status(200).render('index',{
        name : "asmit"
    });
});

app.get("/",(req,resp)=>{
    resp.status(200).send("<h1>Welcome to my home page</h1>");
});

app.listen(7000,()=>{
    console.log("listening at port 7000");
})