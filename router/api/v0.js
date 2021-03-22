const express = require('express')
const router = express.Router()

// importing the data
const gallery = require('../../data/gallery.js')

// serve json data
router.get('/gallery.js',(req,res) => {
  res.render('index', {pageTitle: "Kiyo's Gallery"})
})

module.exports = router