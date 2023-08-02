import http from "http";

http
  .createServer((req, res) => {
    console.log("Hello My Server");
    res.end("<h1>hello</h1>");
    res.sendDate("Hello");
  })
  .listen(8080);
