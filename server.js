const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);
const mongoose = require('mongoose');

//Connection to mongoose
mongoose.connect('mongodb://localhost:27017/coffeeshop');
const db = mongoose.connection;

server.listen(port, () => {
    console.log("server running on " +  port)
});