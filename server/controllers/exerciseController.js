const Exercise = require("../models/exercise");
const Split = require("../models/split");

exports.enrollForExercise = async (req, res) => {
  try {
    const user = req.user;
    const { name, no_of_sets, no_of_reps, time_given, split_id, exercise_id } =
      req.body;

    if (!name || !exercise_id || !split_id) {
      return res.status(400).json({
        message: `${name,exercise_id,split_id} is missing`,
      });
    }

    const split = await Split.findById(split_id);

    if (!split) {
      return res.status(400).json({
        message: "split id is invalid",
      });
    }

    
    const exercise = await Exercise.create({
      name,
      no_of_sets,
      no_of_reps,
      time_given,
      split_id,
      exercise_id,
    });

    split.exercises = [...split.exercises , exercise._id];

    await split.save()

    return res.status(200).json({
      success: true,
      message: "exercise enrolled successfully",
      split,
      exercise,
    });
  } catch (err) {
    return res.json({
        error : err.message
    })
  }
};

exports.getExercise = async (req, res) => {
    try {
      const { exercise_id } = req.body;
  
      if (!exercise_id) {
        return res.status(400).json({
          message: "exercise id not defined",
        });
      }
  
      const exercise = await Exercise.findById(exercise_id);
  
      if (!exercise) {
        return res.status(400).json({
          message: "Invalid ID : exercise not found",
        });
      }
  
      return res.status(200).json({
        success: true,
        exercise,
      });
    } catch (err) {
      return res.json({
        message: err.message,
      });
    }
  };
