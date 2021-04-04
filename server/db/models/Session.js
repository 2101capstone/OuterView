const Sequelize = require('sequelize')
const db = require('../db')

const Sessison = db.define('recording', {
  transcript: {
    type: Sequelize.TEXT
  },
  video: {
    type: Sequelize.TEXT
  },
  fillerWordCount: {
    type: Sequelize.INTEGER
  },
  totalGrade: {
    type: Sequelize.FLOAT
  }
})

module.exports = Sessison
