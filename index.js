const express = require('express')
const mongoose = require('mongoose')
const PORT = process.env.PORT || 5000 
const authRouter = require('./authRouter')

const app = express()

app.use(express.json())
app.use('/auth', authRouter)

const start = async () => {
    try {
        await mongoose.connect('mongodb+srv://pipin:Pass321@cluster0.0n5binx.mongodb.net/auth-roles?retryWrites=true&w=majority')
        app.listen(PORT, () => console.log(`server started on port ${PORT}`))
    } catch (e) {
        console.log(e)
    }
}

start()