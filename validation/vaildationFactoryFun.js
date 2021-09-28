const { StatusCodes } = require("http-status-codes");

module.exports = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.body.validate(req.body);
    if (error) {
      return res.status(StatusCodes.BAD_REQUEST).json({ error: error.message });
    }

    next();
  };
};
