const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        if (process.env.NODE_ENV !== 'test') {
            const connected = await mongoose.connect(process.env.MONGODB_URL)
            if (connected) {
                console.log(`DB connected: ${process.env.MONGODB_URL}`)
            }
        } else if (process.env.NODE_ENV === 'test') {
            await mongoose.connect(process.env.MONGODB_URL_TEST)
        } else {
            throw new Error(`No environment detected`)
        }
    } catch (error) {
        console.log(error)
    }
}
module.exports = connectDB
