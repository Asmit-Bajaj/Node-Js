const http = require('http');
const fs = require('fs');


const server = http.createServer((req,res)=>{
    const data = JSON.parse(fs.readFileSync("userApi.json").toString());
    console.log(data);
    
    if(req.url == "/contact"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end("<h3>Welcome to Contact Us page </h3>");
    }else if(req.url == "/about"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end("<h3>Welcome to About Us page </h3>");
    }else if(req.url == "/userapi"){
        res.end(data[0].name);
    }else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h3>404 Not Found</h3>");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening at 8000");
});