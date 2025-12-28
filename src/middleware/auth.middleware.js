//// custome middleware ////////

const jwt = require("jsonwebtoken");
const userModel = require("../models/user.model");

async function authMiddleware (req, res, next) {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({
      message: "Unauthorized access , please login first",
    });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // get the same data as a we encoded (i.e. id)

    const user = await userModel.findOne({
      _id: decoded.id,
    });

    req.user = user; // creating a new req. contin a user and send them;
    next() //  forward a req to next i.e. to createPostController in auth.middleware.js
  } catch (error) {
    // if wrong token enter then throw a error
    return res.status(401).json({
      message: "Token is invalid",
    });
  }


  res.json({
    message : "successfully post"
  })
}


module.exports = authMiddleware;