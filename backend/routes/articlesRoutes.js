const express = require('express')
const { getAllRecent,createArticle, likeArticle, publishArticle, updateArticle, getUsersArticle } = require('../controller/articleController')
const {authenticate} = require("../middlewares/authenticate")

const router = express.Router()

router.get('/recent',getAllRecent)

router.get('/selfWritten/:status',authenticate,getUsersArticle)
router.post('/create',authenticate,createArticle)
router.put('/update',authenticate,updateArticle)
router.patch('/like/:articleId',authenticate,likeArticle)
router.patch('/publish/:articleId',authenticate,publishArticle)

module.exports = router