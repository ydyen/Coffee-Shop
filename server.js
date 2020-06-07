const http = require('http');
const bodyParser = require('body-parser');
const path = require('path');
const port = process.env.PORT || 3000;
const app = require('./app');
const server = http.createServer(app);

//middlewares
app.use(bodyParser.json());

server.listen(port, () => {
    console.log("server running on " +  port)
});