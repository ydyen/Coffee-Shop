const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const app = express();

//middlewares
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.json());

const router = require('./public/routes/route')
app.use('/', router);

module.exports = app;