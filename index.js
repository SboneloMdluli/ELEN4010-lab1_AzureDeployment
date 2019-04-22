let express = require('express')
let app = express()
// loading our routers
let mainRouter = require('./mainRoutes.js')
let classRouter = require('./classRoutes.js')
// mounting our routers
app.use('/', mainRouter)
app.use('/class', classRouter)
let port = process.env.PORT || 3000
app.listen(port)
console.log('Express server running on port', port)
