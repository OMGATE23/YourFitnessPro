const express = require('express')
const { createSplit, getSplit, getSplitAndExercises} = require('../controllers/splitController')

const { isLoggedIn } = require('../middleware/user')

const router = express.Router()

router.route('/create').post( isLoggedIn, createSplit)
router.route('/getsplit/:split_id').get(getSplitAndExercises)

module.exports = router