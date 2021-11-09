const express = require('express')
const productionLogRouter = express.Router()
const {
    createProductionLog,
    getAllProductionLogs,
} = require('../controllers/productionLogController')

productionLogRouter.post('/', createProductionLog)

productionLogRouter.get('/', getAllProductionLogs)

module.exports = productionLogRouter
