const fs = require('fs');

const obj = [
    {
        name : "ab004",
        age : 45,
    },
    {
        name : "ab004",
        age : 45,
    },
    {
        name : "ab004",
        age : 45,
    },
];

const json = JSON.stringify(obj);

fs.writeFileSync(`${__dirname}/userApi/userApit.json`,json);

const data = JSON.parse(fs.readFileSync("read.txt").toString());

console.log(data.name);
console.log(data.age);