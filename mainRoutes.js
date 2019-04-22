let express = require('express')
let mainRouter = express.Router()
mainRouter.get('/', function (req, res) {
  res.send('Hello World')
})
mainRouter.get('/', function (req, res) {
  res.send('Hello World, I\'m Node.js')
})
module.exports = mainRouter
