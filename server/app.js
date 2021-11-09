const express = require('express')
const app = express()
require('dotenv').config()
const connectDB = require('./config/db')
const apiRouter = require('./api')

const PORT = process.env.PORT || 8080

connectDB()
app.use(express.static('public'))
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Server running')
})

app.use('/api', apiRouter)

const server = app.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})

module.exports = server
