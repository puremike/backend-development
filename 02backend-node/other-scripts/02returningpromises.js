"use strict";

const { readFile, writeFile } = require("fs").promises;

const start = async (path) => {
  try {
    const readFilePromise = await readFile(path, "utf-8");
    console.log(readFilePromise);

    // const writeFilePromise = await writeFile(
    //   "./02backend-node/text.txt",
    //   "And Jesus grew in status and wisdom and in favour with God and man"
    // );

    // console.log(readFile("./02backend-node/text.txt", "utf-8"));
  } catch (err) {
    console.error(new Error(err));
  }
};

start("./02backend-node/package.json");

// const { readFile, writeFile } = require("fs");

// //a promise to read a file
// const helperFunction = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf-8", (err, data) => {
//       if (err) {
//         console.error(new Error(err));
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };

// helperFunction("./02backend-node/package.json")
//   .then((res) => console.log(res))
//   .catch((err) => console.error(err));
