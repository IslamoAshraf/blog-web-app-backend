var jwt = require("jsonwebtoken");

const jwtVerify = async (email) => {
  const token = await jwt.sign({ email }, process.env.TOKEN_VERIFY_KEY, {
    expiresIn: process.env.TOKEN_EXPIRY,
  });
  return token;
};
module.exports = jwtVerify;
