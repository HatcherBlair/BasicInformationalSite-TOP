const http = require("http");
const fs = require("fs");
const path = require("path");

const hostname = "127.0.0.1";
const port = 8080;

const server = http.createServer((req, res) => {
  let page = null;
  switch (req.url) {
    case "/":
      page = "index.html";
      break;

    case "/about":
      page = "about.html";
      break;

    case "/contact-me":
      page = "contact-me.html";
      break;

    default:
      page = "404.html";
  }

  const filePath = path.join(__dirname, page);
  fs.readFile(filePath, (err, data) => {
    if (err) {
      res.statusCode = 500;
      res.end(`Error loading ${page}`);
    } else {
      res.statusCode = 200;
      res.setHeader("Content-Type", "text/html");
      res.end(data);
    }
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
