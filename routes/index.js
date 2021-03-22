const express = require('express');
const router = express.Router();
const dayJS = require('dayjs')
const apiRoute = require('./api/v0')


  router.get('/', (req, res) => {
    res.render('pages/index', {pageTitle: 'Index', dayJS})
  })
  
  router.get('/login', (req, res) => {
    res.render('pages/login', {pageTitle: 'Login', dayJS})
  })
  
  router.get('/register', (req, res) => {
    res.render('pages/register', {pageTitle: 'Register', dayJS})
  })

  router.use('/api/v0', apiRoute)

  module.exports = router;
