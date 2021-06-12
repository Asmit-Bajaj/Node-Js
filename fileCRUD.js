// require the file system module

const fs = require("fs");

//write to file

fs.writeFileSync("read.txt","Welcome back");

//append content
fs.appendFileSync("read.txt","\nI am back");


//read content
let buff_ = fs.readFileSync("read.txt");

let content = buff_.toString();

console.log(content);

//rename file
fs.renameSync("read.txt","welcome.txt");

//delete file
fs.unlinkSync("welcome.txt");




