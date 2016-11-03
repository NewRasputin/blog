var express = require('express')
var app = express()

var mongoose = require('mongoose')

// connect to mongo
mongoose.Promise = global.Promise
mongoose.connect(process.env.DB_url, function (err) {
  if (err) {
    console.log(err)
  } else {
    console.log('Connection successfull')
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

app.get('/', function (req, res) {
  res.render('index')
})

var postSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdAt: Date
})

var Post = mongoose.model('Posts', postSchema)

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

app.listen(process.env.PORT)
