const express = require("express");

const app = express();
const port = 5000;

const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://minerba:413510d8@boilerplate.jybxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("mongo db connect well"))
  .catch((err) => console.log(err));
// mongodb+srv://minerba:<password>@boilerplate.jybxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("Hello, World, 안녕하세요"));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
