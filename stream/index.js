const fs = require('fs');

const http = require('http');

const server = http.createServer();

//listen on request
server.on("request",(req,resp)=>{
    //creating read stream
    const rstream = fs.createReadStream("input.txt");

    //when data is available write
    // rstream.on('data',(data)=>{
    //     resp.write(data);
    // });

    // rstream.on('end',()=>{
    //     resp.end();
    // })

    //2nd way
    rstream.pipe(resp);
});

server.listen(8000,"127.0.0.1");