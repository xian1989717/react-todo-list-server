const http = require('http')

const server = http.createServer()
const { servers } = require('./controller/index')

servers(server)

server.listen('8100', function () {
  console.log('server is running!')
})