const { promisify } = require("util");
const jwt = require("jsonwebtoken");
const { ErrorResponse } = require("../helpers/responseHandler");

const verify = promisify(jwt.verify); // Makes JWT.verify() async to not block asynchronous code flow  

const authMiddleware = async (req, res, next) => {
  try {
    const token = req.cookies.token;

    if (!token) {
      return res.status(401).send(new ErrorResponse("Token not provided"));
    }

    const decodedToken = await verify(token, process.env.JWT_SECRET_KEY);
    req.user = decodedToken;
    req.userId = decodedToken.id;

    next();
  } catch (err) {
    console.error("Authentication error:", err);

    if (err.name === "JsonWebTokenError" || err.name === "TokenExpiredError") {
      return res.status(403).send(new ErrorResponse("Invalid or expired token"));
    }
    return res.status(500).send(new ErrorResponse("An internal error occurred"));
  }
};

module.exports = authMiddleware;
