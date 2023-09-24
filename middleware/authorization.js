const { isTokenValid } = require("../utils/jwt");
const customError = require("../errors");

const authorize = (req, res, next) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader && authHeader.startsWith("Bearer")) {
      const token = authHeader.split(" ")[1];
      isTokenValid(token);
      next();
      return;
    } else {
      throw new customError.BadRequest(
        "Make sure to include authorization header and bearer"
      );
    }
  } catch (error) {
    next(error);
  }
};

module.exports = { authorize };
