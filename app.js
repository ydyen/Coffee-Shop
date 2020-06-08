const express = require('express');
const path = require('path');
const app = express();

//middlewares
app.use(express.static(path.join(__dirname, 'public')));
const router = require('./public/routes/route')

app.use('/', router);

module.exports = app;