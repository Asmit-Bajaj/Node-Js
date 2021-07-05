//acquire express framework
const express = require("express");
const app = express();

//creating the get request 
app.get("/",(req,resp)=>{
    resp.send("Hello World")
})

//listening at port 8000
app.listen(8000,()=>{
    console.log("Listening at 8000");
})

