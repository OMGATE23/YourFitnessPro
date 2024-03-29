const express = require('express')
const {register, login , logout, getAllSplits, updateHeightWeightAge, health} = require('../controllers/userController')
const { isLoggedIn } = require('../middleware/user')

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get( isLoggedIn, logout)
router.route('/getsplits').get(isLoggedIn , getAllSplits)
router.route('/updateattr').post(isLoggedIn , updateHeightWeightAge)
router.route('/health').get(health)

module.exports = router