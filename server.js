var express = require('express')
var app = express()

var bodyParser = require('body-parser')

var morgan = require('morgan')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// use morgan for logging
app.use(morgan('dev'))

app.get('/', function (req, res) {
  res.send('hello, world!')
})

app.listen(process.env.PORT)
