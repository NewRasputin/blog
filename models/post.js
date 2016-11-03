/* eslint-disable */
var mongoose = require('mongoose')

var postSchema = new mongoose.Schema({
  title: String,
  body: String,
  createdAt: { type: Date, default: Date.now }
})

var Post = mongoose.model('Posts', postSchema)

module.exports = Post
