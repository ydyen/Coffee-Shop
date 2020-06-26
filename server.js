const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);
const mongoose = require('mongoose');


//Connection to Database
const uri = require('./config');

mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
},
    (err, callback) => {
        if (err) throw err;
        console.log("**** Database Connected **** ")
    });


server.listen(port, () => {
    console.log("server running on " + port)
});