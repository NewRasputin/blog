/* eslint-disable */
var express = require('express')
var auth = express.Router()

var util = require('util')

// require User model
var User = require('../models/user.js')

auth.route('/login')
  .get(function (req, res) {
    // TODO: what even goes here
  })
  .post(function (req, res) {
    util.log('Finding user...')
    User.findOne({
      username: req.body.username
    })
      .exec(function (err, user) {
        if (user === null) {
          util.log('No user with that name.')
          res.status(400).send('No user with that name.')
        } else {
          if (user.password === req.body.password) {
            util.log('User found!')
            res.send('Success')
          } else {
            util.log('Incorrect password.')
            res.status(422).send('Incorrect password.')
          }
        }
      })
  })
auth.route('/signup')
  .get(function (req, res) {
    // TODO: what even goes here
  })
  .post(function (req, res) {
    util.log('Saving user...')
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    })
    newUser.save(function (err) {
      if (err) {
        util.log(err)
        if (err.code === 11000) {
          res.status(400).send('Username already taken.')
        } else {
          res.send('Failed to save new user.')
        }
      } else {
        util.log('User saved!')
        res.send('Success')
      }
    })
  })

module.exports = auth
