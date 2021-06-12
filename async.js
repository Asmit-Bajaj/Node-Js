const fs = require('fs');

//asynchronous vs synchronous

// fs.writeFileSync("read.txt","Hello world");
let data = fs.readFileSync("read.txt","utf-8");
console.log(data);
console.log("After the data");

//using the asynchronous
fs.readFile("read.txt","utf-8",(err,data)=>{
    console.log(data);
});

console.log("after the data");


