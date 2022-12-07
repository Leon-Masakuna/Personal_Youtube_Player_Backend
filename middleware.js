const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

function verifyUser(req, res, next) {
  const idToken = req.headers.authorization;
  jwt.verify(idToken, process.env.PUBLIC_KEY, (err, decoded) => {
    if (err) {
      return res.status(401).send("L'utilisateur n'est pas autorisé");
    }
    req.userToken = decoded;
    next();
  });
}

module.exports = { verifyUser };
