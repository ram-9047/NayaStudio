var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
let mongoose = require("mongoose");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//connecting database

mongoose.connect(
  "mongodb://localhost/nayaStudio",
  { useNewUrlParser: true, useUnifiedTopology: true },
  (err) => {
    console.log(err ? err : "connected db");
  }
);

app.use("/", indexRouter);
app.use("/users", usersRouter);

module.exports = app;
