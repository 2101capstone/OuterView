// const router = require('express').Router()
// const {Session} = require('../db/models/Session')

// router.get('/', async (req, res, next) => {
//   try {
//     const allSessions = await Session.findAll()
//     res.json(allSessions)
//   } catch (error) {
//     next(error)
//   }
// })

// router.get('/:id', async (req, res, next) => {
//   try {
//     const {id} = req.params
//     const singleSession = await Session.findByPk(id)
//     res.json(singleSession)
//   } catch (error) {
//     next(error)
//   }
// })

// module.exports = router
