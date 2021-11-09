const ProductionLog = require('../models/productionLog.model')

exports.createProductionLog = async (req, res) => {
    try {
        const {
            date,
            millManager,
            firstShift,
            secondShift,
            thirdShift,
            coalUsed,
            electricityConsumed,
            starchConsumed,
            polycationicConsumed,
            akdConsumed,
            antifoamConsumed,
            dispro51Consumed,
            timeLost,
        } = req.body

        const data = {
            date: date,
            millManager: millManager,
            shiftProduction: {
                firstShift: firstShift,
                secondShift: secondShift,
                thirdShift: thirdShift,
            },
            coalUsed: coalUsed,
            electricityConsumed: electricityConsumed,
            starchConsumed: starchConsumed,
            polycationicConsumed: polycationicConsumed,
            akdConsumed: akdConsumed,
            antifoamConsumed: antifoamConsumed,
            dispro51Consumed: dispro51Consumed,
            timeLost: timeLost,
        }

        const saveLogDB = await ProductionLog.create(data)

        res.status(201).json(saveLogDB)
        // res.json(data)
    } catch (error) {
        if (process.env.NODE_ENV !== 'test') console.log(error)
        if (error.code === 11000) {
            res.status(409).json({ error: 'entry with date already exists' })
        } else {
            res.status(500).json({ error: error })
        }
    }
}

exports.getAllProductionLogs = async (req, res) => {
    try {
        const allProductionLogsDB = await ProductionLog.find({})

        res.json(allProductionLogsDB)
    } catch (error) {
        if (process.env.NODE_ENV !== 'test') console.log(error)
        res.status(500).json({ error: error })
    }
}

exports.deleteProductionLog = async (req, res) => {
    try {
        const { productionLogId } = req.params

        const deleteFromDB = await ProductionLog.deleteOne({
            _id: productionLogId,
        })

        res.status(204).json(deleteFromDB)
    } catch (error) {
        if (process.env.NODE_ENV !== 'test') console.log(error)
        res.status(500).json({ error: error })
    }
}
