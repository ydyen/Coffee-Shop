const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);
const mongoose = require('mongoose');


//Connection to Database
const uri = require('./config');

//process.env.uri is the secret access link to mongo db uri code
let heroku_uri = process.env.uri;

mongoose.connect(heroku_uri, {
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