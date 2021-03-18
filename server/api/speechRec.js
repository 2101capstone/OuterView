const router = require('express').Router()

router.get('/speech', async (req, res) => {
  res.send('Hello')
})

module.exports = router
