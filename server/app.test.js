import React from 'react'
import app from './app'
import request from 'supertest'
import { assert } from 'chai'
import render, { act } from 'react-test-renderer'
import App from '../client/src/App'
import mongoose from 'mongoose'
import ProductionLog from './models/productionLog.model'

beforeAll(async () => {
    try {
        await ProductionLog.deleteMany({})
    } catch (error) {
        console.log(error)
    }
})

describe('Server Running', function () {
    describe('GET /', () => {
        it('Responds with 200 status', async function () {
            const req = await request(app).get('/').send()
            assert.equal(req.status, 200)
        })
        it('Div with id root', async function () {
            const req = await request(app).get('/').send()

            assert.equal(req.status, 200)
        })
    })
})

describe('POST /api/production-log', () => {
    test('Creates a new product log', async () => {
        const data = {
            date: '2018-9-1',
            millManager: 'Jorge',
            firstShift: {
                shiftManager: 'Arcila',
                materialType: {
                    starched: true,
                    weight: 180,
                },
                materialProduced: 19900,
                rawMaterialConsumed: 21000,
            },
            secondShift: {
                shiftManager: 'Pepe',
                materialType: {
                    starched: false,
                    weight: 160,
                },
                materialProduced: 21900,
                rawMaterialConsumed: 22100,
            },
            thirdShift: {
                shiftManager: 'Jose',
                materialType: {
                    starched: true,
                    weight: 140,
                },
                materialProduced: 20900,
                rawMaterialConsumed: 21100,
            },
            coalUsed: 3000,
            electricityConsumed: 212000,
            starchConsumed: 200,
            polycationicConsumed: 250,
            akdConsumed: 300,
            antifoamConsumed: 220,
            dispro51Consumed: 222,
            timeLost: 4,
        }
        const req = await request(app)
            .post('/api/production-log')
            .set('Content-type', 'application/json')
            .send(data)

        assert.equal(req.status, 201)
    })
    test('Fails to create a new production log with same date', async () => {
        const data = {
            date: '2018-9-1',
            millManager: 'Jorge',
            firstShift: {
                shiftManager: 'Arcila',
                materialType: {
                    starched: true,
                    weight: 180,
                },
                materialProduced: 19900,
                rawMaterialConsumed: 21000,
            },
            secondShift: {
                shiftManager: 'Pepe',
                materialType: {
                    starched: false,
                    weight: 160,
                },
                materialProduced: 21900,
                rawMaterialConsumed: 22100,
            },
            thirdShift: {
                shiftManager: 'Jose',
                materialType: {
                    starched: true,
                    weight: 140,
                },
                materialProduced: 20900,
                rawMaterialConsumed: 21100,
            },
            coalUsed: 3000,
            electricityConsumed: 212000,
            starchConsumed: 200,
            polycationicConsumed: 250,
            akdConsumed: 300,
            antifoamConsumed: 220,
            dispro51Consumed: 222,
            timeLost: 4,
        }
        const req = await request(app)
            .post('/api/production-log')
            .set('Content-type', 'application/json')
            .send(data)

        assert.equal(req.status, 409)
    })
})

// GET Production Logs route test

describe('GET /api/production-log', () => {
    test('Gets all Production Logs', async () => {
        const req = await request(app).get('/api/production-log').send()

        console.log(req.body)
        assert.equal(req.status, 200)
    })
})

test('App component renders', () => {
    const component = render.create(<App title="test App" />)
    let tree = component.toJSON()
    expect(tree).toMatchSnapshot()
    act(() => {
        tree.props.onMouseEnter()
    })
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()

    // manually trigger the callback
    act(() => {
        tree.props.onMouseLeave()
    })
    // re-rendering
    tree = component.toJSON()
    expect(tree).toMatchSnapshot()
})

afterAll(async () => {
    try {
        // console.log(mongoose)
        // const { users } = mongoose.connection.collections
        // // // Collection is being dropped.
        // await users.drop()
        // Connection to Mongo killed.
        await mongoose.connection.close()
        // Server connection closed.
        app.close()
        // await server.close()
    } catch (error) {
        console.log(`
    You did something wrong dummy!
    ${error}
  `)
        throw error
    }
})
