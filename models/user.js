/* eslint-disable */
var mongoose = require('mongoose')

var userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required : true},
  password: { type: String, required : true},
  createdAt: { type: Date, default: Date.now }
})

var User = mongoose.model('Users', userSchema)

module.exports = User
