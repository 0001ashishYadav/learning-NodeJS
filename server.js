const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/apple", (req, res) => {
  res.send("apple");
});

app.post("/files", (req, res) => {
  console.log(req.query.name);
  // console.log(req.body);
  res.json({
    data: "files",
  });
});

app.all(/^.*$/, (req, res) => {
  res.json({
    message: "wrong route",
  });
});

app.listen(5000, () => {
  console.log(`Example app listening on port 5000`);
});
