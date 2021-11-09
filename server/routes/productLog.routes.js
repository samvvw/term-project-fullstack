const express = require('express')
const productLogRouter = express.Router()
const { createDailyLog } = require('../controllers/productLogController')

productLogRouter.post('/', createDailyLog)

module.exports = productLogRouter
