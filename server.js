const http = require("http");
const path = require("path");
const fs = require("fs");
const {promisify} = require("util");
const EventEmitter = require("events");
const text = path.join(__dirname, "doc.txt");
const emitter = new EventEmitter();
emitter.on("response", () => {
  console.log("response");
});
let nr = 0;

const server = http.createServer(
  async (req, res) => {
    if (req.url === "/") {
      const p = fs.existsSync(text);
      const stream = fs.createReadStream(text, {
        highWaterMark: 500,
        encoding: "utf-8",
      });
      stream.on("open", (d) => {
        stream.pipe(res);
      });
      console.log(p);
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
     
      emitter.emit("response");
      // res.end();
      return;
    }
    if (req.url === "/about") {
      res.writeHead(200, {
        "Content-Type": "application/json",
      });
      res.write(JSON.stringify({msg: "ok"}));
      res.end();
      return;
    }
    res.writeHead(200, {
      "Content-Type": "application/json",
    });
    res.write(JSON.stringify({msg: "fuck off"}));
    res.end();
  }
);

server.listen(5001, () => {
  console.log("up");
});
server.on("connection", () => {
  console.log("connected");
  nr++;
  console.log(nr);
});
