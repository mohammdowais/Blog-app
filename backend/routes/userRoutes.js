const express = require("express")
// controllers
const {login,signup} = require('../controller/userController')

const router = express.Router()

router.post("/login",login)
router.post("/signup",signup)

module.exports = router