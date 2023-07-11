const http = require("http");
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = process.env.PORT || 3000

const host = 'localhost';
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

//CROS handle
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

let routes = require('./routers/web') //importing route
routes(app)

app.use(function(req, res) {
    res.status(404).send({ url: req.originalUrl + ' not found' })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})