const router = require('express').Router()
module.exports = router

router.use('/users', require('./users'))
//router.use('/sessions', require('./sessions'))
//test 1
router.use((req, res, next) => {
  const error = new Error('Not Found')
  error.status = 404
  next(error)
})
