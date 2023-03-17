//GLOBALS - NO WINDOW!!!!

//__dirname - path to current directory
//__filename - file name
//require - function to use modules (CommonJS)
//module - info about current module (file)
//process - info about env where the program is being executed

//INBUILT MODULES

//OS module
const os = require("os");

// const { hostname, totalmem, freemem } = os;
// console.log(`${hostname}`);
const osDetails = {
  name: os.type(),
  hostName: os.hostname(),
  totalMem: os.totalmem(),
  freeMem: os.freemem(),
  uptime: os.uptime(),
  directory: os.homedir(),
};
console.log(osDetails);

//PATH module
const path = require("path");
console.log(path.resolve("01backend-node", "app.js")); //returns the absolute path

//FS module
const fs = require("fs");

//read a file
const first = fs.readFileSync("./01backend-node/modules/app.js", "utf-8");
console.log(first);

//create a new file
const second = fs.writeFileSync(
  "./01backend-node/modules/text.txt",
  "Hi, I'm Michael, and currently learning NodeJs."
);
console.log(fs.readFileSync("./01backend-node/modules/text.txt", "utf-8"));
