const jwt = require("jsonwebtoken");

exports.generateToken = (payload, expired) => {
  return jwt.sign(payload, process.env.TOKEN_SELECT, {
    expiresIn: expired,
  });
};
