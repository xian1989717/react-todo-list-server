const url = require('url')
const { add: serverAdd } = require('../service/index')

function add (params) {
  return serverAdd(params)
}

module.exports.servers = function (server) {
  server.on('request', function (request, response) {
    const urls = request.url
    const { pathname, query } = url.parse(urls, true)
    if (pathname === '/add') {
      response.send(add(query))
    }
  })
}