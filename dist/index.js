const app = require('./src/app')

// port
const port = process.env.PORT || 3000

// start server
const server = app.listen(port, function() {
  console.log(`Server started with port ${server.address().port}`)
})

