const http = require("http");
const fs = require("fs");
const requests = require("requests");

const homeFile = fs.readFileSync("home.html","utf-8");

//replace content of html file

const replaceVal = (homeFile,val)=>{
    let temp = homeFile.replace("{%tempval%}",val.main.temp);
    temp = temp.replace("{%tempmin%}",val.main.temp_min);
    temp = temp.replace("{%tempmax%}",val.main.temp_max);
    temp = temp.replace("{%location%}",val.name);
    temp = temp.replace("{%country%}","India");
    return temp;

}

const server = http.createServer((req,resp)=>{
    if(req.url == "/"){
        requests('https://api.openweathermap.org/data/2.5/weather?q=bhopal&appid=e2291719a046f0b1971f5bf879c62b06', )
        .on('data', function (chunk) {
            const obj = JSON.parse(chunk);
            const arrayData = [obj];
            
            const realTimeData = arrayData.map((val)=> replaceVal(homeFile,val)).join("");
            resp.write(realTimeData);
        })
        .on('end', function (err) {
        if (err) return console.log('connection closed due to errors', err);
            
        resp.end();
        });
    }
});

server.listen(8000,"127.0.0.1");

