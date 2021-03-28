const { User } = require("../models/User");

let auth = (req, res, next) => {
  //인증 처리를 하는 곳

  //1. client cookie에서 토큰을 가져옴
  let token = req.cookies.x_auth;
  //2. 토큰을 복호화한 후 use를 찾는다.
  User.findByToken(token, (err, user) => {
    if (err) throw err;
    if (!user) return res.json({ isAuth: false, err: true });

    req.token = token;
    req.user = user;
    next();
  });
  //3. 유저가 있으면 OK
  //4. 유저가 없으면 NO
};

module.exports = { auth };
