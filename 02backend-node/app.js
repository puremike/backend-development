"use strict";

const PORT = 9000;

//using http
// const http = require("http");

// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.end(`<h1>Welcome to my page!!</h1>`);
//   } else if (req.url === "/about") {
//     res.end(
//       `<h1>My name is Michael Egbinola, I'm a Backend and Cloud Developer</h1>`
//     );
//   } else {
//     res.end(`<h1>Oops!! Invalid Page</h1>
//         <p>Click <a href="/">here</a> to go back to the home page</p>`);
//   }
// });

// server.listen(PORT);
// console.log(`Server is running on PORT: ${PORT}`);

const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send(`<h1>Welcome to my page!!</h1>`);
});

app.get("/about", (req, res) => {
  res.send(`<h1>My name is Michael, I'm a Backend and Cloud Developer</h1>`);
});

app.get("*", (req, res) => {
  res.send(`<h1>Oops!! Invalid Page</h1>
  <p>Click <a href="/">here</a> to go back to the home page</p>`);
});

app.listen(PORT);
console.log(`Server is running on PORT: ${PORT}`);
