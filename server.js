"use strict";

var express = require("express");
var cors = require("cors");

var multer = require("multer");
var upload = multer({ dest: "uploads/" });

var app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use("/public", express.static(process.cwd() + "/public"));

app.get("/", function (req, res) {
  res.sendFile(process.cwd() + "/views/index.html");
});

app.get("/hello", function (req, res) {
  res.json({ greetings: "Hello, API" });
});

app.post("/api/fileanalyse", upload.single("upfile"), (req, res) => {
  if (req.file) {
    res
      .status(200)
      .json({
        name: req.file.originalname,
        type: req.file.mimetype,
        size: req.file.size,
      });
  } else {
    res.send("No file uploaded!");
  }
});

app.listen(port, function () {
  console.log("Node.js listening: " + port);
});
