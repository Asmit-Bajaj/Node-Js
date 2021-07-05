//express initiliazation
const express = require("express");
const app = express();

//routing 

app.get("/",(req,resp)=>{
    resp.status(200).send("<h1>Welcome to my home page</h1>");
});

app.get("/about",(req,resp)=>{
    resp.status(200).json({
        id : 1,
        name : "asmit",
    });
});

app.get("/contact",(req,resp)=>{
    resp.status(200).json(null);
});


app.listen(7000,()=>{
    console.log("listening at port 7000");
})