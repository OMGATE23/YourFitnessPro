const jwt = require("jsonwebtoken");

const cookieToken = async (res, user) => {
  
  try {
    const token = jwt.sign(
        {
          id: user._id,
          name: user.name,
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "2h",
        }
      );
    const options = {
      expires: new Date(Date.now() + 3 * 24 * 60 * 60 * 1000),

      httpOnly: true,
    };

    user.password = undefined;
    res.status(200).cookie("token", token, options).json({
      succes: true,
      token,
      user,
    });
  } catch (err) {
    return res.json({
      message: "Something went wrong in cookieToken.js"
    });
  }
};

module.exports = cookieToken;