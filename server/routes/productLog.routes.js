const express = require('express')
const productionLogRouter = express.Router()
const {
    createProductionLog,
    getAllProductionLogs,
    deleteProductionLog,
} = require('../controllers/productionLog.controller')

productionLogRouter.post('/', createProductionLog)

productionLogRouter.get('/', getAllProductionLogs)

productionLogRouter.delete('/:productionLogId', deleteProductionLog)

module.exports = productionLogRouter
