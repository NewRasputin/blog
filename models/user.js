/* eslint-disable */
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: String,
  password: String,
  createdAt: { type: Date, default: Date.now }
})

var User = mongoose.model('Users', userSchema)

module.exports = User
