var http = require('http')

const server = http.createServer()

server.listen('8100', function () {
  console.log('server is running!')
})