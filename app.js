const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");

const taskRouter = require("./routes/taskRoutes");
const userRouter = require("./routes/userRoutes");

const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use(cookieParser());

app.use(express.static(path.join(__dirname, `public`)));
app.use(express.static(path.join(__dirname, `dist`)));

//Body Parser
app.use(express.json());

app.use("/api/v1/tasks", taskRouter);
app.use("/api/v1/users", userRouter);

app.use(globalErrorHandler);

module.exports = app;
