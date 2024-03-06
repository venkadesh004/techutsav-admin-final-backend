const jwt = require("jsonwebtoken");

module.exports.requireAuth = (req, res, next) => {
  try {
    const token = req.cookies.auth_token;
    if (token) {
      jwt.verify(token, process.env.SECRET_KEY, (err, decodedToken) => {
        if (err) {
          res.status(400).json({ msg: "error" });
        } else {
          next();
        }
      });
    } else {
      res.status(400).json({ msg: "error" });
    }
  } catch (err) {
    res.status(400).json({ msg: "error" });
  }
};
