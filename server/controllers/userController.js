const User = require("../models/user");
const bcrypt = require("bcryptjs");
const cookieToken = require("../utils/cookieToken");
const Split = require("../models/split");

exports.register = async (req, res) => {
  try {
    const { email, password, name } = req.body;
    const encryptedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
      name,
      email,
      password: encryptedPassword,
    });

    cookieToken(res, user);
  } catch (err) {
    return res.json({
      error: err.message,
    });
  }
};
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!(email || password)) {
      return res.status(400).json({
        message: "Email or password not given",
      });
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Email or Password is incorrect",
      });
    }
    if (!(await bcrypt.compare(password, user.password))) {
      return res.status(400).json({
        message: "Email or Password is incorrect",
      });
    }

    cookieToken(res, user);
  } catch (err) {
    return res.status(500).json({
      message: `Something went wrong: ${err.message}`,
    });
  }
};
exports.logout = async (req, res) => {
  try {
    res.cookie("token", null, {
      expires: new Date(Date.now()),
      httpOnly: true,
    });

    res.status(200).json({
      success: true,
      message: "You are successfully logged out",
    });
  } catch (err) {
    return res.status(500).json({
      message: `Something went wrong in logging you out: ${err.message}`,
    });
  }
};

exports.getAllSplits = async (req, res) => {
  try {
    const user = req.user;

    const updatedUser = await User.findById(user._id);
    const list = updatedUser.created_splits;
    let splitDetails = []
    for (let i = 0; i < list.length; i++) {
      let splitId = list[i].toString();
      let split = await Split.findById(splitId);

      let splitDetail = {
        name: split.name,
        exercises: split.exercises,
      };
      splitDetails = [splitDetail , ...splitDetails]
    }

    return res.status(200).json({
      success: true,
      list: updatedUser.created_splits,
      splitDetails,
    });
  } catch (err) {
    return res.json({
      error: err.message,
    });
  }
};