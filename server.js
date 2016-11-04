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
    util.log('Connection successfull')
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

// require User model
var User = require('./models/user.js')

app.route('/login')
  .get(function (req, res) {
    // TODO: what even goes here
  })
  .post(function (req, res) {
    User.findOne({
      username: req.body.username
    })
      .exec(function (err, user) {
        if (err) {
          console.log(err)
        } else {
          console.log(user)
          if (user.password === req.body.password) {
            res.send('Success')
          } else {
            res.send('Incorrect pass or no user')
          }
        }
      })
  })

// require Post model
var Post = require('./models/post.js')

app.route('/api/post')
  .get(function (req, res) {
    Post.find({}, function (err, posts) {
      if (err) {
        console.log(err)
      } else {
        res.send(posts)
      }
    })
  })
  .post(function (req, res) {
    var newPost = new Post({
      title: req.body.title,
      body: req.body.body
    })
    newPost.save(function (err) {
      if (err) {
        console.log(err)
      }
    })
  })

// catchall route for html5 history
app.get('*', function (req, res) {
  res.render('index')
})

app.listen(process.env.PORT)
