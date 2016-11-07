/* eslint-disable */
var util = require('util')

var User = require('../models/user.js')

var authenticate = function (req, res, next) {
  util.log('Authenticating...')
  if (req.session && req.session.username) {
    User.findOne({username: req.session.username})
      .exec(function (err, user) {
        if (user) {
          util.log(user.username + ' authenticated!')
          next()
        } else {
          res.status(400).send('No user with that name.')
        }
      })
  } else {
    util.log('User not logged in.')
    res.status(403).send('You must be logged in to do that.')
  }
}

module.exports = authenticate
