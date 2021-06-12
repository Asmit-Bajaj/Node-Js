const http = require('http');

const server = http.createServer((req,res)=>{
    if(req.url == "/contact"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end("<h3>Welcome to Contact Us page </h3>");
    }else if(req.url == "/about"){
        res.writeHead(200,{"Content-type" : "text/html"});
        res.end("<h3>Welcome to About Us page </h3>");
    }else{
        res.writeHead(404,{"Content-type" : "text/html"});
        res.end("<h3>404 Not Found</h3>");
    }
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("Listening at 8000");
});