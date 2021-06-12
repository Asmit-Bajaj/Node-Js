//using chalk module
const chalk = require('chalk');

//using validator module
const validator = require("validator");

let res = validator.isEmail("asmitbjj.004@");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
console.log("Hello world");
console.log("Hello world");
console.log("Hello wolrd");
