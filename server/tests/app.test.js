import React from 'react'
import app from '../app'
import request from 'supertest'
import { assert } from 'chai'
import render, { act } from 'react-test-renderer'
import App from '../../client/src/App'
import mongoose from 'mongoose'
import ProductionLog from '../models/productionLog.model'
import fs from 'fs'
import path from 'path'

const SEED = JSON.parse(
    fs.readFileSync(
        path.resolve('server', 'tests', 'utils', 'sample-data.json')
    )
).seedObject

const SAMPLE_DATA = JSON.parse(
    fs.readFileSync(
        path.resolve('server', 'tests', 'utils', 'sample-data.json')
    )
).requestObject

beforeAll(async () => {
    try {
        // console.log(SEED.seedObject[1])
        await ProductionLog.deleteMany({})
        await ProductionLog.create(SEED[1])
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
        const data = SAMPLE_DATA[0]
        const req = await request(app)
            .post('/api/production-log')
            .set('Content-type', 'application/json')
            .send(data)

        assert.equal(req.status, 201)
    })
    test('Fails to create a new production log with same date', async () => {
        const data = SAMPLE_DATA[0]
        const req = await request(app)
            .post('/api/production-log')
            .set('Content-type', 'application/json')
            .send(data)

        assert.equal(req.status, 409)
    })
})

// GET Production Logs route test
let firstProductionLogId
describe('GET /api/production-log', () => {
    test('Gets all Production Logs', async () => {
        const req = await request(app).get('/api/production-log').send()

        firstProductionLogId = req.body[0]._id
        assert.equal(req.status, 200)
    })
})

describe('DELETE /api/production-log/:productionLogId', () => {
    test('Deletes a production log with Id', async () => {
        const req = await request(app)
            .delete(`/api/production-log/${firstProductionLogId}`)
            .send()

        assert.equal(req.status, 204)
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