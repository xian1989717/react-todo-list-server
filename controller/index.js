const url = require('url')
const { add, select, delete: deleteDate, update } = require('../service/index')

module.exports.servers = function (server) {
  server.on('request', function (request, response) {
    const urls = request.url
    const { pathname, query } = url.parse(urls, true)
    if (pathname === '/add') {
      add(query, function (data) {
        response.end(JSON.stringify(data))
      })
    } else if (pathname === '/select') {
      select(query, function (data) {
        response.end(JSON.stringify(data))
      })
    } else if (pathname === '/delete') {
      deleteDate(query, function (data) {
        response.end(Boolean(data.affectedRows).toString())
      })
    } else if (pathname === '/update') {
      update(query, (data) => {
        response.end(Boolean(data.affectedRows).toString())
      })
    }
  })
}