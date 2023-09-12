const mailRoute = require('express').Router()
const { sendMail, notFound, index } = require('../controller/mailController')


mailRoute.get(`/`, index)
mailRoute.post(`/api/send/mail`, sendMail)
mailRoute.all(`/**`, notFound)

module.exports = mailRoute