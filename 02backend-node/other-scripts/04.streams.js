// const stream = require("fs").createReadStream("./02backend-node/app.js");

const { createReadStream } = require("fs");
const stream = createReadStream("./02backend-node/package-lock.json");

stream.on("data", (chunks) => {
  console.log(chunks);
});
