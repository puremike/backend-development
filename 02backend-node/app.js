("use strict");

const PORT = 9000;

// const http = require("http");

// function handleRequest(req, res) {
//   if (req.url === "/") {
//     res.end(`<h1>Welcome to my page</h1>`);
//   } else if (req.url === "/about") {
//     res.end(
//       `<h1>My name is Michael Egbinola, a Fullstack Software Developer</h1>`
//     );
//   } else
//     res.end(
//       `<h1>Web page not available</h1> <p>Click <a href="/"> here </a> to go home</p>`
//     );
// }

// const server = http.createServer(handleRequest);

// server.listen(PORT);

//using express
const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send(`<h1>Welcome to my beautiful page</h1>`);
});

app.get("/about", function (req, res) {
  res.send(
    `<h1>My name is Michael Egbinola, I'm a Backend and Cloud Engineer</h1>`
  );
});

app.get("*", function (req, res) {
  res.send(`<h1>Oops. Invalid Page!!!</h1>
  <p>Click <a href="/"> here </a> to go back</p>`);
});

app.listen(PORT);
