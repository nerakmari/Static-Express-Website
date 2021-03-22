const express = require('express')
const images = require('../../data/gallery')
const router = express.Router()

//importing array of objects
const gallery = require('../../data/gallery')

router.get('/gallery', (req, res) => {
  res.json(images)
})

module.exports = router