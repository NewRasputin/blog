/* eslint-disable */
var express = require('express')
var api = express.Router()

var util = require('util')

// require Post model
var Post = require('../models/post.js')

var authenticate = require('./middleware.js')

// called on landing on home page, fetches posts
// should be available to all
api.get('/post', function (req, res) {
  util.log("Fetching posts...")
  Post.find({}, function (err, posts) {
    if (err) {
      util.log(err)
    } else if (posts) {
      util.log('Posts found!')
      res.send(posts)
    } else {
      util.log('No posts found.')
    }
  })
})

// called on submitting post form
// should be protected
api.post('/post', authenticate, function (req, res) {
  util.log('Saving post...')
  var newPost = new Post({
    title: req.body.title,
    body: req.body.body
  })
  newPost.save(function (err) {
    if (err) {
      util.log(err)
    } else {
      util.log('Post saved!')
      res.send('Success')
    }
  })
})

module.exports = api
