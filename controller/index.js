module.exports.servers = function (server) {
  server.on('request', function (request, response) {
    response.end('hello world')
  })
}