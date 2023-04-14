const express = require('express')
const {register, login , logout, getAllSplits} = require('../controllers/userController')
const { isLoggedIn } = require('../middleware/user')

const router = express.Router()

router.route('/register').post(register)
router.route('/login').post(login)
router.route('/logout').get( isLoggedIn, logout)
router.route('/getsplits').get(isLoggedIn , getAllSplits)

module.exports = router