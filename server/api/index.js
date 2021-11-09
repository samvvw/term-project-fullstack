const express = require('express')
const apiRouter = express.Router()
const productLogRouter = require('../routes/productLog.routes')

apiRouter.use('/product-log', productLogRouter)

module.exports = apiRouter
