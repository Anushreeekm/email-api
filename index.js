const express = require('express')
const cors =  require('cors')
const cookieParser = require('cookie-parser')
require('dotenv').config()

const PORT = process.env.PORT

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
app.use(cookieParser())

app.use(`/`,require('./route/mailRoute'))

app.listen(PORT, () => {
    console.log(`server is started and running @ http://localhost:${PORT}`)
})