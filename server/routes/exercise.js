const express = require('express')
const {enrollForExercise, getExercise} = require('../controllers/exerciseController')

const { isLoggedIn } = require('../middleware/user')

const router = express.Router()

router.route('/enroll').post( isLoggedIn, enrollForExercise)
router.route('/getexercise').get(getExercise)

module.exports = router