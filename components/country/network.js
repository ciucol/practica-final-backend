const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.json({ name: 'Lina', country: 'US' })
})

router.post('/', (req, res) => {
  res.json({ name: 'Lina', country: 'US' })
})

router.delete('/', (req, res) => {
  res.json({ name: 'Lina', country: 'US' })
})

module.exports = router