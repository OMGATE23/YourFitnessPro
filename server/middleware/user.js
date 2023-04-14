const jwt = require("jsonwebtoken")
const User = require('../models/user')


exports.isLoggedIn = async (req, res, next) => {
    try {
      let token;
      if (req.cookies) {
        token = req.cookies;
      }
  
      if (!token && req.header("Authorization")) {
        token = req.header("Authorization").replace("Bearer ", "");
      }
  
      if (!token) {
        return res.status(401).json({
          message: "User is not logged in. Please log in to access this route",
        });
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
  
      const user = await User.findById(decoded.id);
  
      req.user = user;
      next();
    } catch (err) {
      return res.status(500).json({
        message: "Something went wrong in isLoggedIn middleware",
        error : err.message
      });
    }
  };