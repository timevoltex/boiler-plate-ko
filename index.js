const bodyParser = require("body-parser");
const express = require("express");
const config = require("./config/key");

const app = express();
const port = 5000;

const mongoose = require("mongoose");

const { User } = require("./models/User");

app.use(bodyParser.urlencoded({ extended: true }));

app.use(bodyParser.json());

mongoose
  .connect(config.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("mongo db connect well"))
  .catch((err) => console.log(err));
// mongodb+srv://minerba:<password>@boilerplate.jybxi.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

app.get("/", (req, res) => res.send("새해복 많이 받으세요ggg"));

app.post("/register", (req, res) => {
  //회원가입시 필요한 정보를 client 에서 가져오면
  //그것들을 DB에 넣어준다.

  const user = new User(req.body);

  user.save((err, userInfo) => {
    if (err) return res.json({ success: false, err });
    return res.status(200).json({ success: true });
  });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
