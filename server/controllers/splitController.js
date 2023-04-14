const Split = require("../models/split");
const User = require("../models/user");

exports.createSplit = async (req, res) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(400).json({
        message: "Name is required",
      });
    }
    const userId = req.user._id;
    const split = await Split.create({
      name,
      user_id: userId,
    });
    const user = await User.findById(userId);

    user.created_splits.push(split._id);
    await user.save();
    res.status(200).json({
      success: true,
      message: "split created succesfully!",
      split,
      user,
    });
    res.json();
  } catch (err) {
    return res.json({
      err: err.message,
    });
  }
};

exports.getSplit = async (req, res) => {
  try {
    const { split_id } = req.body;

    if (!split_id) {
      return res.status(400).json({
        message: "split id not defined",
      });
    }

    const split = await Split.findById(split_id);

    if (!split) {
      return res.status(400).json({
        message: "Invalid ID : split not found",
      });
    }

    return res.status(200).json({
      success: true,
      split,
    });
  } catch (err) {
    return res.json({
      message: err.message,
    });
  }
};
