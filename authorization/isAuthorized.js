const { StatusCodes } = require("http-status-codes");
const jwt = require("jsonwebtoken");
require("dotenv").config();

module.exports = (roles) => {
  return async (req, res, next) => {
    try {
      if (req.headers.authorization) {
        const token = req.headers.authorization.split(" ")[1];

        if (token) {
          const decoded = await jwt.verify(token, process.env.TOKEN_KEY);
          req.user = decoded;
          const isAllowed = roles.includes(decoded.role);
          if (isAllowed) {
            next();
          } else {
            res
              .status(StatusCodes.UNAUTHORIZED)
              .json({ message: "unauthoraized" });
          }
        }
      }
    } catch (error) {
      res.status(StatusCodes.UNAUTHORIZED).json({ message: "unauthoraized" });
    }
  };
};
