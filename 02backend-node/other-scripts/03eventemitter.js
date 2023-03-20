const EventEmitter = require("events");
const newEvent = new EventEmitter();

newEvent.on("response", (name, id) => {
  console.log(`Data Received by user ${name} with id:${id}`);
});

//you can emit another "response" event
newEvent.emit("response", "Michael", 25);

//using HTTP module

const http = require("http");
const PORT = 9000;
server = http.createServer();

//event.on instead of a handleServer function
server.on("response", (req, res) => {
  if (req.url === "/") {
    res.end(`<h1>Welcome to my page</h1>`);
  } else if (req.url === "/about") {
    res.end(`<h1>I'm Michael, a Backend and Cloud Developer`);
  } else {
    res.end(`<h1>Oops!!! Invalid Page
    <p>Click <a href="/">here </a> to go back to home page</p></h1>`);
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on PORT: ${PORT}`);
});
