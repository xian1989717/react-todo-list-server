const { connection } = require('../mysql.config')

module.exports = {
  add (params, callback) {
    connection.connect()
    const sql = `insert into todo_list set name = ${params.name},is_removed = false,type = 'doing'`
    connection.query(sql, function (err, data) {
      callback(data)
      connection.end()
    })
  },
  select (params, callback) {
    connection.connect()
    const sql = `select * from todo_list where is_removed = false`
    connection.query(sql, function (err, data) {
      callback(data)
      connection.end()
    })
  },
  delete (params, callback) {
    const { id } = params
    connection.connect()
    const sql = 'update todo_list set is_removed = 1 where id=' + id
    connection.query(sql, function (err, data) {
      callback(data)
      connection.end()
    })
  },
  update (params, callback) {
    const { id } = params
    connection.connect()
    const sql = `update todo_list set type = 'done' where id=${id}`
    connection.query(sql, function (err, data) {
      callback(data)
      connection.end()
    })
  }
}