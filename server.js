/* eslint-disable */
var express = require('express')
var app = express()

var mongoose = require('mongoose')

var util = require('util')

// connect to mongo
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_url, function (err) {
  if (err) {
    console.log(err)
  } else {
    util.log('Connection to db successfull...')
  }
})

var bodyParser = require('body-parser')

var morgan = require('morgan')

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

// use morgan for logging
app.use(morgan('dev'))

// set public folder
app.use(express.static('public'))

// set view engine
app.set('view engine', 'ejs')

// set views folder
app.set('views', './views')

// login routes
var login = require('./routes/login.js')

app.use(login)

// api routes
var api = require('./routes/api.js')

app.use('/api', api)

// catchall route for html5 history
app.get('*', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT, function () {
  util.log('Server listening on port '+process.env.PORT+'...')
})
