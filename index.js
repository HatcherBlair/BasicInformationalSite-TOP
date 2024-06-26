const express = require("express");
const path = require("path");
const app = express();

const port = 8080;

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.get("/about", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/about.html"));
});

app.get("/contact-me", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/contact-me.html"));
});

app.get("*", (req, res) => {
  res.status(404).sendFile(path.join(__dirname, "./public/404.html"));
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
