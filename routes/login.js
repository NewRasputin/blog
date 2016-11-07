/* eslint-disable */
var express = require('express')
var auth = express.Router()

var util = require('util')

// require User model
var User = require('../models/user.js')

// called on app mount, checks for session
auth.get('/check', function (req, res) {
  util.log('Checking for session...')
  if (req.session && req.session.username) {
    util.log('Session found! Sending username...')
    res.send({username: req.session.username})
  } else {
    util.log('No session found.')
    res.end()
  }
})

// called on submitting login form, creates session
auth.post('/login', function (req, res) {
    util.log('Finding user...')
    User.findOne({
      username: req.body.username
    })
      .exec(function (err, user) {
        if (user) {
          util.log('User found!')
          if (user.password === req.body.password) {
            req.session.username = user.username
            util.log('Created session for ' + req.session.username)
            res.send({username: req.session.username})
          } else {
            util.log('Incorrect password.')
            res.status(422).send('Incorrect password.')
          }
        } else {
          util.log('No user found')
          util.log(err)
          res.status(400).send('No user with that name.')
        }
      })
  })

// called on submitting signup form
auth.post('/signup', function (req, res) {
    util.log('Saving user...')
    var newUser = new User({
      username: req.body.username,
      password: req.body.password
    })
    newUser.save(function (err) {
      if (err) {
        util.log('Failed to save user.')
        util.log(err)
        if (err.code === 11000) {
          res.status(400).send('Username already taken.')
        } else {
          res.send('Failed to save user.')
        }
      } else {
        util.log('User saved!')
        res.send('Success')
      }
    })
  })

module.exports = auth
