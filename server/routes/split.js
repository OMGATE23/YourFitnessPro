const express = require('express')
const { createSplit, getSplit} = require('../controllers/splitController')

const { isLoggedIn } = require('../middleware/user')

const router = express.Router()

router.route('/create').post( isLoggedIn, createSplit)
router.route('/getsplit').get(getSplit)

module.exports = router