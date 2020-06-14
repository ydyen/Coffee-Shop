const http = require('http');
const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);
const mongoose = require('mongoose');
const uri = require('./setting');

//Connection to Database
async function main() {
    try {
        mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        },
            (err, callback) => {
                if (err) throw err;
                console.log("**** Database Connected **** ")
            });
    } catch (e) {
        console.error(e);
    } 
}

main().catch(console.error);

server.listen(port, () => {
    console.log("server running on " + port)
});