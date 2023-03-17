//the http modules
const http = require("http");
const PORT = 8000;
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to my page");
  } else if (req.url === "/about") {
    res.end("Seasoned and analytical JavaScript and NodeJS Developer");
  } else
    res.end(`<h1>Oops!!!</h1>
  <p>Page is not available</p>
  <a href="/">Go home</a>`);
  //   res.write("Welcome to my page");
  //   res.end();
});

server.listen(PORT);
