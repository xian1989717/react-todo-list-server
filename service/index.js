const { connection } = require('../mysql.config')
module.exports.add = function (params, callback) {
  connection.connect()
  const sql = `insert into todo_list set name = ${params.name},is_removed = false,type = 'doing'`
  connection.query(sql, function (err, data) {
    callback(data)
    connection.end()
  })
}

module.exports.select = function (params, callback) {
  connection.connect()
  const sql = `select * from todo_list`
  connection.query(sql, function (err, data) {
    callback(data)
    connection.end()
  })
}