const mongoose = require("mongoose");

const dotenv = require("dotenv");

dotenv.config({ path: "./config.env" });

process.on("uncaughtException", (err) => {
  console.log("UNCAUGHT EXCEPTION !!!");
  console.log(err.name, err.message);
  process.exit(1);
});

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<password>",
  process.env.DATABASE_PASSWORD
);

const port = process.env.PORT || 5000;

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connect to the DATABASE");
  });

const server = app.listen(port, () => {
  console.log(`successfully connected to the ${port}`);
});

process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION !!!");
  console.log(err.name, err.message);
  server.close(() => {
    process.exit(1);
  });
});
