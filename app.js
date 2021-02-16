const express = require("express");
const path = require("path");

const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(express.static(path.join(__dirname, `public`)));
app.use(express.static(path.join(__dirname, `dist`)));

//Body Parser
app.use(express.json());

app.use(globalErrorHandler);

module.exports = app;
