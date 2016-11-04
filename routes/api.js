/* eslint-disable */
var express = require('express')
var api = express.Router()

var util = require('util')

// require Post model
var Post = require('../models/post.js')

api.route('/post')
  .get(function (req, res) {
    Post.find({}, function (err, posts) {
      if (err) {
        util.log(err)
      } else {
        res.send(posts)
      }
    })
  })
  .post(function (req, res) {
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
