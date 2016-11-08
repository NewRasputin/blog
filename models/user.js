/* eslint-disable */
var mongoose = require('mongoose')

var util = require('util')

var bcrypt = require('bcryptjs')

var userSchema = new mongoose.Schema({
  username: { type: String, unique: true, required : true},
  password: { type: String, required : true},
  createdAt: { type: Date, default: Date.now }
})

userSchema.pre('save', function (done) {
  var self = this
  util.log('Hashing password...')
  bcrypt.hash(self.password, 8, function (err, hash) {
    self.password = hash
    done()
  })
})

var User = mongoose.model('Users', userSchema)

module.exports = User
