const express = require('express')
const apiRouter = express.Router()
const productionLogRouter = require('../routes/productLog.routes')

apiRouter.use('/production-log', productionLogRouter)

module.exports = apiRouter
