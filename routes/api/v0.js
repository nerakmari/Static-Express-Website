const express = require('express')
const router = express.Router()

//importing array of objects
const gallery = require('../../data/gallery')

router.get('/gallery', (req, res) => {
  res.json(gallery)
})

module.exports = router