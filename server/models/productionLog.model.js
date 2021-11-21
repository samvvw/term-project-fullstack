const mongoose = require('mongoose')

const { Schema } = mongoose

const shiftSchema = new Schema({
    shiftManager: {
        type: String,
        minLength: 3,
        maxlength: 18,
        required: [true, 'Shift manager name is required'],
    },
    materialType: {
        starched: {
            type: Boolean,
            required: true,
        },
        weight: {
            type: Number,
            required: true,
        },
    },
    materialProduced: {
        type: Number,
        required: [true, 'Material produced is required'],
        min: 0,
    },
    rawMaterialConsumed: {
        type: Number,
        required: [true, 'Material consumed is required'],
        min: 0,
    },
})

shiftSchema.set('toJSON', { getters: true, virtuals: true })

shiftSchema.virtual('fiberLoss').get(function () {
    return (
        ((this.rawMaterialConsumed - this.materialProduced) /
            this.rawMaterialConsumed) *
        100
    )
})

const productionLogSchema = new Schema(
    {
        date: {
            type: Date,
            required: true,
            unique: true,
        },
        millManager: {
            type: String,
            required: true,
            minLength: 3,
        },
        shiftProduction: {
            firstShift: {
                type: shiftSchema,
                required: true,
            },
            secondShift: {
                type: shiftSchema,
                required: true,
            },
            thirdShift: {
                type: shiftSchema,
                required: true,
            },
        },
        coalUsed: {
            type: Number,
            required: true,
            min: 0,
        },
        electricityConsumed: {
            type: Number,
            required: true,
            min: 0,
        },
        starchConsumed: {
            type: Number,
            required: true,
            min: 0,
        },
        polycationicConsumed: {
            type: Number,
            required: true,
            min: 0,
        },
        akdConsumed: {
            type: Number,
            required: true,
            min: 0,
        },
        antifoamConsumed: {
            type: Number,
            required: true,
            min: 0,
        },
        dispro51Consumed: {
            type: Number,
            required: true,
            min: 0,
        },
        timeLost: {
            type: Number,
            required: true,
            min: 0,
            max: 24,
        },
    },
    { timestamps: true }
)
productionLogSchema.set('toJSON', { getters: true, virtuals: true })
productionLogSchema.virtual('shiftProduction.totalProduction').get(function () {
    return (
        this.shiftProduction.firstShift.materialProduced +
        this.shiftProduction.secondShift.materialProduced +
        this.shiftProduction.thirdShift.materialProduced
    )
})

productionLogSchema
    .virtual('shiftProduction.totalRawMaterial')
    .get(function () {
        return (
            this.shiftProduction.firstShift.rawMaterialConsumed +
            this.shiftProduction.secondShift.rawMaterialConsumed +
            this.shiftProduction.thirdShift.rawMaterialConsumed
        )
    })

productionLogSchema.virtual('shiftProduction.totalFiberLoss').get(function () {
    return (
        ((this.shiftProduction.totalRawMaterial -
            this.shiftProduction.totalProduction) /
            this.shiftProduction.totalRawMaterial) *
        100
    )
})
const ProductionLog = mongoose.model('ProductionLog', productionLogSchema)

module.exports = ProductionLog
