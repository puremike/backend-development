"use strict";

const fs = require("fs"); //file system module - helps to read or write a file
console.log(`File System Module - helps to read or write a file`);

setTimeout(() => {
  const readFile = fs.readFileSync(
    "./02backend-node/package.json",
    "utf-8",
    (err, result) => {
      if (err) {
        console.error(new Error(err));
      }
      // console.log(result);
    }
  );
  console.log(readFile);
  console.log(`Completed First Task`);
}, 1000);

console.log(`File read successfully`);
