const express = require('express');
const bodyParser = require('body-parser');

const app = express()
const productCtrl = require('./controllers/product')
const api = require('./routes')

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api', api)
module.exports = app
